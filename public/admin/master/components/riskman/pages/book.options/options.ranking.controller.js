(function() {
    'use strict';

    angular
        .module('riskman.book.options')
        .controller('OptionsRankingController', OptionsRankingController);

    OptionsRankingController.$inject = ['$scope', '$stateParams', 'bookRanking', '$timeout', '$q'];

    function OptionsRankingController($scope, $stateParams, bookRanking, $timeout, $q) {
        var c = this;
        
        /*
         * model for book
         */
        c.myBook = {
            id: $stateParams.bookId,
            name: 'test book mock'
        };
        
        /**
         * bookRanking model
         */
        c.bookRanking = [
        ];
        
        
        
        /*
         * checks if input is percentage > 0 and < 100
         */
        c.checkPercentage100 = function(data, item) {
            var num = parseFloat(data);
            if(num <= 0.01 || num >= 100.00) {
                return 'Percentage must be between 1 and 100.';
            }
        };
        
        /**
         * set limit percentage and calculate limit amount
         */
        c.setLimitPercent = function(value, item){
            item.limit_percent = value;
            item.limit_amount = (item.max_amount_expected / 100) * item.limit_percent;
        };
        
        /**
         * set limit percentage and calculate limit amount
         */
        c.setLimitAmount = function(value, item){
            item.limit_amount = value;
            item.limit_percent = (value / item.max_amount_expected) * 100;
        };
        
        /**
         * set max amount expected and calculates limit amount
         */
        c.setMaxExpected = function(value, item) {
            item.max_amount_expected = value;
            item.limit_amount = (item.max_amount_expected / 100) * item.limit_percent;  
        };
        
        /**
         * check limit amount boundaries
         */
        c.checkLimitAmount = function(value, item) {
            var row = 0;
            angular.forEach(c.bookRanking, function(ranking, key) {
                if(ranking.rank === item.rank) {
                    row = key;
                }
            }, this);
            if(row === 0) {
                if(value <= 0 || value > item.max_amount_expected) {
                    return 'Limit per bet must be greater than 0 and less than ' + item.max_amount_expected;
                }
            } else {
                if(value <= c.bookRanking[row - 1].limit_amount || value > item.max_amount_expected) {
                    return 'Limit per bet must be greater than ' + c.bookRanking[row - 1].limit_amount + ' and less than ' + item.max_amount_expected;
                }
            }
        };
        
        /*
         * check ranking limits
         */
        c.checkRankingLimits = function(value, item) {
            var mae = value;
            var row = 0;
            angular.forEach(c.bookRanking, function(ranking, key) {
                if(ranking.rank === item.rank) {
                    row = key;
                }
            }, this);
            if(row === 0) {
                if(mae <= 0 || mae > c.bookRanking[row + 1].max_amount_expected) {
                    return 'Max Amount must be between 0 and ' + c.bookRanking[row + 1].max_amount_expected;
                }
            } else {
                if(mae <= c.bookRanking[row - 1].max_amount_expected || mae >= c.bookRanking[row + 1].max_amount_expected) {
                    return 'Max Amount must be between ' + c.bookRanking[row - 1].max_amount_expected +  ' and ' + c.bookRanking[row + 1].max_amount_expected;
                }
            }
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
            var r = bookRanking.getBookRanking(c.myBook.id);
            r.then(function(res){
                angular.merge(c.bookRanking, res.data.bookRanking.rankings);
            }, bookRanking.onError);
        };
        
        
        
        /**
         * listens for refresh calls
         */
        $scope.$on('initRankingOptions', function(data){
            c.init();
        });
        
        //triggers on init
        c.init();
        
        
    }
})();