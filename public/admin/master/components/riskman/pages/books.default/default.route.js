(function() {
    'use strict';

    angular
        .module('riskman.books.default')
        .run(defaultRoute);

    defaultRoute.$inject = ['Router'];
    function defaultRoute(Router){

        Router.state('riskman.books.default', {
            url: '/books/default',
            title: 'Book Default Options',
            templateUrl: 'default.html',
            require: ['modernizr', 'icons', 'ng-mfb', 'md-colors'],
            parent:'riskman'
        });
    }

})();
