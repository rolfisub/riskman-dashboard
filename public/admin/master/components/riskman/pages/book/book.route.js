(function() {
    'use strict';

    angular
        .module('riskman.book')
        .run(bookRoute);

    bookRoute.$inject = ['Router'];
    function bookRoute(Router){

        Router.state('riskman.book', {
            url: '/book/:bookId',
            title: 'Book',
            templateUrl: 'book.html',
            require: ['modernizr', 'icons', 'ng-mfb', 'md-colors'],
            parent:'riskman'
        });
    }

})();
