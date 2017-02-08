(function () {
    'use strict';

    angular
        .module('app')
        .controller('login', login);

    login.$inject = ['$location']; 

    function login($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'login';

        activate();

        function activate() { }
    }
})();
