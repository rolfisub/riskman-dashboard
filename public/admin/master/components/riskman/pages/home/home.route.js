(function() {
    'use strict';

    angular
        .module('riskman.home')
        .run(homeRoute);

    homeRoute.$inject = ['Router'];

    function homeRoute(Router) {

        Router.state('riskman.home', {
            url: '/home',
            title: 'Home',
            templateUrl: 'home.html',
            require: ['angular-flot', 'easypiechart', 'sparkline', 'vector-map', 'vector-map-maps'],
        });
    }

})();
