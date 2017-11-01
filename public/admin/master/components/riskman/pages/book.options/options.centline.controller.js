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
        c.bookCentline = {
            presetSelected: '',
            presets: [],
            current: []
        };
        
        
        /**
         * Load selected preset 
         * @returns {undefined}
         */
        c.loadPresetClick = function(){
            if(c.bookCentline.presetSelected !== '') {
                var key = c.bookCentline.presetSelected;
                c.bookCentline.current = c.bookCentline.presets[key];
            } else {
                //please select a preset to load
                console.log("please select a preset to load");
            }
        };
        
        
        
        /**
         * init the main page
         * @returns {undefined}
         */
        c.init = function() {
            var r = bookCentline.getBookCentline(c.myBook.id);
            r.then(function(res){
                console.log(res);
            }, bookCentline.onError);
            
            /**
             * get presets
             */
            var p = bookCentline.getBookCentlinePresets();
            p.then(function(res){
                c.bookCentline.presets = res.data.centlinePresets;
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
    }
})();