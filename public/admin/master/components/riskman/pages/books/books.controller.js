(function() {
    'use strict';

    angular
        .module('riskman.admins')
        .controller('BooksController', AdminsController);

    AdminsController.$inject = ['$scope', 'books'];

    function AdminsController($scope, books) {
        var c = this;
        
        c.myBooks = [];
        
        c.init = function() {
            var r = books.getBooksList();
            
            r.then(function(res){
                c.myBooks = res.data.books;
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