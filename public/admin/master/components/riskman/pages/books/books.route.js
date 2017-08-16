(function() {
    'use strict';

    angular
        .module('riskman.books')
        .run(booksRoute);

    booksRoute.$inject = ['Router'];
    function booksRoute(Router){

        Router.state('riskman.books', {
            url: '/books',
            title: 'Books',
            templateUrl: 'books.html',
            require: ['modernizr', 'icons', 'ng-mfb', 'md-colors'],
            parent:'riskman'
        });
    }

})();
