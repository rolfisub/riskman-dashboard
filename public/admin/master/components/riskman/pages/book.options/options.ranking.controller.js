(function() {
    'use strict';

    angular
        .module('riskman.book.options')
        .controller('OptionsRankingController', OptionsRankingController);

    OptionsRankingController.$inject = ['$scope', '$stateParams', 'bookFormat', '$timeout'];

    function OptionsRankingController($scope, $stateParams, bookFormat, $timeout) {
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
            {
                rank:'A',
                max_line_change_percent:'10',
                max_amount_expected:'100',
                limit_percent:'1000',
                limit_amount:'10000'
            },
            {
                rank:'B',
                max_line_change_percent:'10',
                max_amount_expected:'100',
                limit_percent:'1000',
                limit_amount:'10000'
            },
            {
                rank:'C',
                max_line_change_percent:'10',
                max_amount_expected:'100',
                limit_percent:'1000',
                limit_amount:'10000'
            },
        ];
        
        /**
         * grid options
         */
        c.gridOptions = {
            dataSource: c.bookRanking,
            allowColumnReordering: false,
            allowColumnResizing: false,
            columnAutoWidth: true,
            columnChooser: {
                enabled: false
            },
            columnFixing: { 
                enabled: false
            },
            editing:{
                mode: 'cell',
                allowUpdating: true,
                allowDeleting: false,
                allowAdding: false,
            },
            columns:['rank', 'max_line_change_percent','max_amount_expected', 'limit_percent', 'limit_amount']
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