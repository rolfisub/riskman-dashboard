/**
 * Main api CRUD service
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */

/**
 * API service wrapper to make Ajax calls for Trxade
*/
(function() {
    'use strict';
    angular
        .module("app.home")
        .service('home', ['api', function (api) {
                
        this.getGeneralServerStats = function() {
            return api.read('/stats/general_api_stats');
        };
        
        this.onError = function(err) {
            return api.errorCallback(err);
        };
        
    }]);

})();