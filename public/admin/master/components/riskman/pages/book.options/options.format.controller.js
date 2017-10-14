(function() {
    'use strict';

    angular
        .module('riskman.book.options')
        .controller('OptionsFormatController', OptionsFormatController);

    OptionsFormatController.$inject = ['$scope', '$stateParams', 'bookFormat', '$timeout'];

    function OptionsFormatController($scope, $stateParams, bookFormat, $timeout) {
        var c = this;
        
        /*
         * model for book
         */
        c.myBook = {
            id: $stateParams.bookId,
            name: 'test book mock'
        };
        
        /**
         * bookFormat model
         */
        c.bookFormat = {
            odd_format: '',
            time_zone: '',
            currency: ''
        };
        
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
        
        /**
         * 
         * @returns {undefined}
         */
        c.updateFormat = function(){
            var r = bookFormat.updateBookFormat(c.myBook.id, c.bookFormat);
            r.then(function(res) {
                showSuccessFor(3);
            }, bookFormat.onError)
        };
        
        /**
         * init the main page
         * @returns {undefined}
         */
        c.init = function() {
            
            //get initial data
            var r = bookFormat.getBookFormat (c.myBook.id);
            r.then(function(res){
                c.bookFormat = angular.merge(c.bookFormat, res.data.bookFormat);
            }, bookFormat.onError);
            
        };
        
        
        
        /**
         * listens for refresh calls
         */
        $scope.$on('initFormatOptions', function(data){
            c.init();
        });
        
        //triggers on init
        c.init();
        
        
    }
})();