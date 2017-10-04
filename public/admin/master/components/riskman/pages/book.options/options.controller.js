(function() {
    'use strict';

    angular
        .module('riskman.book.options')
        .controller('OptionsController', OptionsController);

    OptionsController.$inject = ['$scope', '$stateParams', 'book', 'books'];

    function OptionsController($scope, $stateParams, book, books) {
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
                c.myBook = res.data.book;
            }, book.onError);
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