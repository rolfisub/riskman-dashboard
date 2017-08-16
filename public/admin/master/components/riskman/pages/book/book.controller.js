(function() {
    'use strict';

    angular
        .module('riskman.admins')
        .controller('BookController', BookController);

    BookController.$inject = ['$scope', '$stateParams', 'book'];

    function BookController($scope, $stateParams, book) {
        var c = this;
        
        /*
         * model for book
         */
        c.myBook = {
            id: $stateParams.bookId,
            name: 'test book mock'
        };
        
        /**
         * init the main page
         * @returns {undefined}
         */
        c.init = function() {
            var r = book.getBook(c.myBook.id);
            r.then(function(res){
                console.log(res);
            }, book.onError)
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