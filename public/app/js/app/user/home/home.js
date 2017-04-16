/**
 * Landing page main controller
 *
 * @package   RiskMan Admin
 * @author    Rolf Bansbach
 * @copyright Copyright 2017 Trxadegroup, Inc.
 */

define('home',[
    'admin',
    'header',
    'footer',
    'mainpanel',
    'api'
], function(admin){
    admin.cp.register('home',[
        '$scope', 
        '$sce', 
        'api',
        'spinnerService',
        '$timeout',
    function ($scope, $sce, api, spinnerService,$timeout) {
        
        $scope.config = {
            generalLoading:true,
            last24Loading:false,
            monthlyLoading:false
        };
        $scope.data = {
            general_api_stats:{}
        };
        var init = function(){
            getGeneralStats();
        };
        
        var getGeneralStats = function(){
            var rg = api.read('/stats/general_api_stats');
            rg.then(function(response){
                console.log(response);
                $scope.data.general_api_stats = response.data.general_api_stats;
                spinnerService.hide('generalSpinner');  
            }, function(){
                console.log(response);
                spinnerService.hide('generalSpinner');
            });
        };
        
        init();
    }]);
});
