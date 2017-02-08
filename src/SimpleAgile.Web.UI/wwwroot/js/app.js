(function () {
    'use strict';

    angular.module('app', [
        // Angular modules 
        'ngRoute'
    ]).config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/register', {
                templateUrl: 'js/register/register.html'
            })
            .when('/login', {
                templateUrl:'js/login/login.html'
            })
            .when('/', {
                templateUrl: 'js/landing/landing.html'
            }).otherwise({ redirecTo: '/' });
    };
})();