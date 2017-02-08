(function () {
    'use strict';

    angular
        .module('app')
        .factory('userService', userService);

    userService.$inject = ['$http', 'DataServiceConfig'];

    function userService($http, DataServiceConfig) {
        var service = {};



        return service;

        function getData() { }
    }
})();