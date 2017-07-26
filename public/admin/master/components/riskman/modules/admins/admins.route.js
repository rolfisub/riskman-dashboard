(function() {
    'use strict';

    angular
        .module('app.admins')
        .run(adminsRoute);

    adminsRoute.$inject = ['Router'];
    function adminsRoute(Router){

        Router.state('app.admins', {
            url: '/admins',
            title: 'Administrators',
            templateUrl: 'admins.html',
            require: ['modernizr', 'icons', 'ng-mfb', 'md-colors']
        });
    }

})();
