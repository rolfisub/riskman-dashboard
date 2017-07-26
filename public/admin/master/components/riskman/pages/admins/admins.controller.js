(function() {
    'use strict';

    angular
        .module('riskman.admins')
        .controller('AdminsController', AdminsController);

    AdminsController.$inject = ['$scope', 'admins'];

    function AdminsController($scope, admins) {
        var c = this;
        
        c.myAdmins = [];
        
        c.init = function() {
            var r = admins.getAdminsList();
            
            r.then(function(res){
                c.myAdmins = res.data.admins_data;
            }, admins.onError);
        };
        
        c.init();
        
    }
})();