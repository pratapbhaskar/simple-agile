(function () {
    'use strict';

    angular
        .module('app')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http', '$cookies', '$rootScope', '$timeout', 'userService', '$base64'];

    function authenticationService($http, $cookies, $rootScope, $timeout, userService, $base64) {
        var service = {};
        service.login = login;
        service.setCredentials = setCredentials;
        service.clearCredentials = clearCredentials;

        return service;

        function login(username, password, callback) {
            //TODO: Api call injection
            $timeout(function () {
                var response;
                userService.getByUserName(username)
                    .then(function (user) {
                        if (user != null && user.password === password) {
                            response = { success: true };
                        } else {
                            response = { success: false };
                        }
                    });

                callback(response);
            }, 1000);
        };

        function setCredentials(username, password) {
            var authData = $base64.encode(username + ':' + password);

            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authData: authData
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic' + authData;

            var cookieExp = new Date();
            cookieExp.setDate(cookieExp.getDate() + 7);
            $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
        };

        function clearCredentials() {
            $rootScope.globals = {};
            $cookies.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic';
        };
    }
})();