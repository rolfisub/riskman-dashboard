(function() {
    'use strict';

    angular
        .module('riskman.admins')
        .controller('BooksController', BooksController);

    BooksController.$inject = ['$scope', 'books'];

    function BooksController($scope, books) {
        var c = this;
        
        c.myBooks = [];
        
        c.prepEnDis = function() {
            angular.forEach(c.myBooks, function(book){
                book.toggle = book.enabled === 1;
            });
        };
        
        c.toggleEnDis = function(book) {
            c.prepEnDis();
        };
        
        c.init = function() {
            var r = books.getBooksList();
            
            r.then(function(res){
                c.myBooks = res.data.books;
                c.prepEnDis();
            }, books.onError);
        };
        
        c.init();
        
        /**
         * listens for refresh calls
         */
        $scope.$on('initBooks', function(data){
            c.init();
        });
        
        
        
        
    }
})();