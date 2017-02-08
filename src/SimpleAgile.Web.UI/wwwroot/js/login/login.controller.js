(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', '$location'];

    function loginController($scope, $location) {
        $scope.loading = false;
        $scope.login = function () {
            $scope.loading = true;

            //TODO: call api service to login user

        }
    }
})();
