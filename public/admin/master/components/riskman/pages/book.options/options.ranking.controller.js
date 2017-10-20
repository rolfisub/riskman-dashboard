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
        
        /**
         * set value bookranking model
         */
        c.setRankingValue = function(updateKey, updateValue) {
            angular.forEach(c.bookRanking, function(value, key){
                if(updateKey === value) {
                    angular.merge(c.bookRanking[key], updateValue);
                    return;
                }
            }, this);
            console.log("Updating Controller Model");
            console.log(c.bookRanking);
        };
        
        /**
         * grid options
         */
        c.gridOptions = {
            dataSource: /*c.bookRanking,*/
            {
                load: function(){
                    console.log("Data Source Load");
                    var def = $q.defer();
                    var r = bookRanking.getBookRanking(c.myBook.id);
                    r.then(function(res){
                        def.resolve(res.data.bookRanking.rankings);
                        angular.merge(c.bookRanking, res.data.bookRanking.rankings);
                    }, bookRanking.onError);
                    return def.promise;
                },
                update: function(key, value){
                    console.log("Data Source Update");
                    c.setRankingValue(key, value);
                    var def = $q.defer();
                    var data = {
                        rankings: JSON.stringify(c.bookRanking) 
                    };
                    var r = bookRanking.updateBookRanking(c.myBook.id, data);
                    r.then(function(res){
                        def.resolve(c.bookRanking);
                    }, bookRanking.onError)
                    return def.promise;
                }
            },
            onEditingStart: function(e) {
                console.log("EditingStart");
                console.log(e);
                
            },
            onInitNewRow: function(e) {
                console.log("InitNewRow");
            },
            onRowInserting: function(e) {
                console.log("RowInserting");
            },
            onRowInserted: function(e) {
                console.log("RowInserted");
            },
            onRowUpdating: function(e) {
                console.log("RowUpdating");
                console.log(e);
            },
            onRowUpdated: function(e) {
                console.log("RowUpdated");
                console.log(e);
            },
            onRowRemoving: function(e) {
                console.log("RowRemoving");
            },
            onRowRemoved: function(e) {
                console.log("RowRemoved");
            },
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
                mode: 'batch',
                allowUpdating: true,
                allowDeleting: false,
                allowAdding: false
            },
            columns:[
                {
                    caption: 'Rank',
                    alignment: 'center',
                    cellTemplate: 'rank',
                    dataField: 'rank'
                },
                {
                    caption: 'Max % Line Move',
                    alignment: 'center',
                    cellTemplate: 'max_line_change_percent',
                    dataField: 'max_line_change_percent'
                },
                {
                    caption: 'Max Expected',
                    alignment: 'center',
                    cellTemplate: 'max_amount_expected',
                    dataField: 'max_amount_expected'
                },
                {
                    caption: 'Limit %',
                    alignment: 'center',
                    cellTemplate: 'limit_percent',
                    dataField: 'limit_percent'
                },
                {
                    caption: 'Limit',
                    alignment: 'center',
                    cellTemplate: 'limit_amount',
                    dataField: 'limit_amount'
                },
                
//                'rank', 
//                'max_line_change_percent',
//                'max_amount_expected', 
//                'limit_percent', 
//                'limit_amount'
            ]
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