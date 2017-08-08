(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(dashboardRoute);

    dashboardRoute.$inject = ['Router'];

    function dashboardRoute(Router) {

        Router.state('app.dashboard', {
            url: '/dashboard',
            title: 'Dashboard',
            templateUrl: 'dashboard.html',
            require: ['angular-flot', 'easypiechart', 'sparkline', 'vector-map', 'vector-map-maps']
        });
    }

})();
