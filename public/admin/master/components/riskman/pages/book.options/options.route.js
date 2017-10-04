(function() {
    'use strict';

    angular
        .module('riskman.book.options')
        .run(optionsRoute);

    optionsRoute.$inject = ['Router'];
    function optionsRoute(Router){

        Router.state('riskman.book.options', {
            url: '/book/options/:bookId',
            title: 'Book Options',
            templateUrl: 'options.html',
            require: ['modernizr', 'icons', 'ng-mfb', 'md-colors'],
            parent:'riskman'
        });
    }

})();
