(function() {
    'use strict';

    angular
        .module('riskman.admins')
        .run(adminsRoute);

    adminsRoute.$inject = ['Router'];
    function adminsRoute(Router){

        Router.state('riskman.admins', {
            url: '/admins',
            title: 'Administrators',
            templateUrl: 'admins.html',
            require: ['modernizr', 'icons', 'ng-mfb', 'md-colors'],
            parent:'riskman'
        });
    }

})();
