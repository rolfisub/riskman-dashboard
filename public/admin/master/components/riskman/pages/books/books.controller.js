(function() {
    'use strict';

    angular
        .module('riskman.books')
        .controller('BooksController', BooksController);

    BooksController.$inject = ['$scope', 'books'];

    function BooksController($scope, books) {
        var c = this;
        
        /*
         * model for books
         */
        c.myBooks = [];
        
        /**
         * prepares toggle switch
         * @returns {}
         */
        c.prepEnDis = function() {
            angular.forEach(c.myBooks, function(book){
                book.toggle = book.enabled === 1;
            });
        };
        
        /*
         * toggle action
         * @param {type} book
         * @returns {undefined}
         */
        c.toggleEnDis = function(book) 
        {
            var data = {
                enabled: book.enabled === 1 ? 0 : 1
            };
            var r = books.updateBook(book.id, data);
            r.then(function(res){
                c.init();
            }, books.onError);
        };
        
        
        
        /**
         * init the main page
         * @returns {undefined}
         */
        c.init = function() {
            var r = books.getBooksList();
            
            r.then(function(res){
                c.myBooks = res.data.books;
                c.prepEnDis();
            }, books.onError);
        };
        
        /**
         * listens for refresh calls
         */
        $scope.$on('initBooks', function(data){
            c.init();
        });
        
        //triggers on init
        c.init();
        
        
    }
})();