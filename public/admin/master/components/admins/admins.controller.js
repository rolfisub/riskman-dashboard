(function() {
    'use strict';

    angular
        .module('app.admins')
        .controller('AdminsController', AdminsController);

    AdminsController.$inject = ['$scope', 'admins'];

    function AdminsController($scope, admins) {
        var c = this;
        
        c.init = function() {
//            var r = admins.();
//            
//            r.then(function(res){
//                c.apiStats = res.data.general_api_stats;
//            }, admins.onError);
        };
        
        c.init();
        
    }
})();