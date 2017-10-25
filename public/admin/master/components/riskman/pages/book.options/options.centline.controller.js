(function() {
    'use strict';

    angular
        .module('riskman.book.options')
        .controller('OptionsCentlineController', OptionsCentlineController);

    OptionsCentlineController.$inject = ['$scope', '$stateParams', 'bookCentline', '$timeout', '$q'];

    function OptionsCentlineController($scope, $stateParams, bookCentline, $timeout, $q) {
        var c = this;
        
        /*
         * model for book
         */
        c.myBook = {
            id: $stateParams.bookId,
            name: 'test book mock'
        };
        
        /**
         * bookCentline model
         */
        c.bookCentline = [
        ];
        
        /*
         * touched variable
         */
        c.touched = false;
        
        /**
         * success model
         */
        c.successMsg = false;
        var showSuccessFor = function(secs){
           c.successMsg = true;
           $timeout(function(){
               c.successMsg = false;
           }, secs * 1000);
        };
        
        /*
         * error model
         */
        c.errorMsg = false;
        var showErrorFor = function(secs){
           c.errorMsg = true;
           $timeout(function(){
               c.errorMsg = false;
           }, secs * 1000);
        };
        
        /**
         * init the main page
         * @returns {undefined}
         */
        c.init = function() {
            var r = bookCentline.getBookCentline(c.myBook.id);
            r.then(function(res){
                
                c.touched = false;
            }, bookCentline.onError);
        };
        
        /**
         * listens for refresh calls
         */
        $scope.$on('initCentlineOptions', function(data){
            c.init();
        });
        
        //triggers on init
        c.init();
        
        
    }
})();