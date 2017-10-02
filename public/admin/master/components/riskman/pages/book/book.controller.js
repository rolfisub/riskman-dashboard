(function() {
    'use strict';

    angular
        .module('riskman.book')
        .controller('BookController', BookController);

    BookController.$inject = ['$scope', '$stateParams', 'book', 'books'];

    function BookController($scope, $stateParams, book, books) {
        var c = this;
        
        /*
         * model for book
         */
        c.myBook = {
            id: $stateParams.bookId,
            name: 'test book mock'
        };
        
        /**
         * prepares toggle switch
         * @returns {}
         */
        c.prepEnDis = function() {
            var book = c.myBook;
            book.toggle = book.enabled === 1;
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
         * updates the name of a book
         * @param {type} book
         * @returns {undefined}
         */
        c.updateName = function() {
            var data = {
                name: c.myBook.name
            };
            var r = books.updateBook(c.myBook.id, data);
            r.then(function(res){
                c.init();
            }, function(err){
                c.init();
                books.onError(err);
            });
        };
        
        /**
         * init the main page
         * @returns {undefined}
         */
        c.init = function() {
            var r = book.getBook(c.myBook.id);
            r.then(function(res){
                c.myBook = res.data.book;
                c.prepEnDis();
            }, book.onError);
        };
        
        
        
        /**
         * listens for refresh calls
         */
        $scope.$on('initBook', function(data){
            c.init();
        });
        
        //triggers on init
        c.init();
        
        
    }
})();