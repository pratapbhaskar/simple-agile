(function () {
    'use strict';

    angular
        .module('app')
        .controller('registerController', registerController);

    registerController.$inject = ['$scope','$location'];

    function registerController($scope,$location) {
        $scope.register = function () {
            $scope.dataloading = true;
            //TODO : calling user service
        }
    }
})();
