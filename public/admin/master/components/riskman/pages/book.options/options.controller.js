(function() {
    'use strict';

    angular
        .module('riskman.book.options')
        .controller('OptionsController', OptionsController);

    OptionsController.$inject = ['$scope', '$stateParams', 'book', 'books', 'bookAuth'];

    function OptionsController($scope, $stateParams, book, books, bookAuth) {
        var c = this;
        
        /*
         * model for book
         */
        c.myBook = {
            id: $stateParams.bookId,
            name: 'test book mock'
        };
        
        /**
         * bookAuth model
         */
        c.bookAuth = {
            client_id: "",
            client_secret: "",
            exists: false
        };
        
        /**
         * delete oauth credentials
         */
        c.deleteAuth = function(){
            c.bookAuth.exists = false;
        };
        
        /*
         * create oauth credentials
         */
        c.createAuth = function(){
            c.bookAuth.exists = true;
        };
        
        /*
         * get the book auth data
         */
        c.bookAuthInit = function(bookId) {
            var r = bookAuth.getBookAuth(bookId);
            r.then(function(res){
                console.log('get book auth');
                console.log(res.data);
                angular.merge(c.bookAuth, res.data.bookAuth);
                c.bookAuth.exists = true;
            }, function(err){
                console.log('ERROR get book auth');
                console.log(err);
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
            }, book.onError);
            
            c.bookAuthInit(c.myBook.id);
        };
        
        
        
        /**
         * listens for refresh calls
         */
        $scope.$on('initOptions', function(data){
            c.init();
        });
        
        //triggers on init
        c.init();
        
        
    }
})();