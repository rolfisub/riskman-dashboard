(function() {
    'use strict';

    angular
        .module('riskman.book.options')
        .controller('OptionsCentlineController', OptionsCentlineController);

    OptionsCentlineController.$inject = ['$scope', '$stateParams', 'bookCentline', '$timeout', '$q'];

    function OptionsCentlineController($scope, $stateParams, bookCentline, $timeout, $q) {
        var c = this;
        
        
        c.touched = false;
        
        /**
         * set input as touched
         */
        c.touch = function() {
            c.touched = true;
        };
        
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
                var preset = JSON.parse(JSON.stringify(c.bookCentline.presets[key]));
                c.bookCentline.current = preset;
            } else {
                //please select a preset to load
                console.log("please select a preset to load");
            }
        };
        
        /**
         * save current centline model
         * @returns {undefined}
         */
        c.saveBookCentline = function() {
            if(c.bookCentline.current.length > 0) {
                var data = {
                    centline: JSON.stringify(c.bookCentline.current)
                };
                var r = bookCentline.updateBookCentline(c.myBook.id, data);
                r.then(function(res){
                    showSuccessFor(3);
                    c.init();
                }, bookCentline.onError);
            }
        };
        
        /*
         * checks if the ml provided is ok
         */
        c.checkMLInput = function(ml, pos) {
            if(pos === 0) {
                if(ml !== -101) {
                    return 'ML can only be -101 at this position.';
                }
            } else {
                var topMl = c.bookCentline.current[pos -1].ml;
                if(pos + 1 === c.bookCentline.current.length) {
                    if(ml >= topMl) {
                        return 'ML needs to be less than ' + topMl;
                    }
                } else {
                    var bottomMl = c.bookCentline.current[pos +1].ml;
                    if(ml >= topMl) {
                        return 'ML needs to be less than ' + topMl;
                    }
                    if(ml <= bottomMl) {
                        return 'ML needs to be greater than ' + bottomMl;
                    }
                }
            }
        };
        
        /*
         * checks if cent value is valid
         */
        c.checkCentInput = function(cent, pos){
            //check for greater than 5 and less than next pos
            if(cent < 5) {
                return 'Cent cannot be less than 5';
            }
            if(pos + 1 === c.bookCentline.current.length) {
                var topCent = c.bookCentline.current[pos -1].cent;
                if(cent <= topCent) {
                    return 'Cent needs to be greater than ' + topCent;
                }
            } else {
                var bottomCent = c.bookCentline.current[pos +1].cent;
                if(pos === 0) {
                    if(cent >= bottomCent) {
                        return 'Cent needs to be less than ' + bottomCent;
                    }
                } else {
                    var topCent = c.bookCentline.current[pos -1].cent;
                    if(cent <= topCent) {
                        return 'Cent needs to be greater than ' + topCent;
                    }
                    if(cent >= bottomCent) {
                        return 'Cent needs to be less than ' + bottomCent;
                    }
                }
            }
        };
        
        
        
        
        /**
         * init the main page
         * @returns {undefined}
         */
        c.init = function() {
            var r = bookCentline.getBookCentline(c.myBook.id);
            r.then(function(res){
                c.bookCentline.current = res.data.bookCentline.centline;
            }, bookCentline.onError);
            
            /**
             * get presets
             */
            var p = bookCentline.getBookCentlinePresets();
            p.then(function(res){
                c.bookCentline.presets = res.data.centlinePresets;
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