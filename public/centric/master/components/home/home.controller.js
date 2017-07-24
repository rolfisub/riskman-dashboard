(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'home'];

    function HomeController($scope, home) {
        var c = this;
        
        c.apiStats = {};
        
        c.init = function() {
            var r = home.getGeneralServerStats();
            
            r.then(function(res){
                c.apiStats = res.data.general_api_stats;
            }, function(err){
                console.log(err);
            });
        };
        
        c.init();
        
    }
})();