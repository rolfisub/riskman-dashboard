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
        .module("app.admins")
        .service('admins', ['api', function (api) {
                
        
        this.onError = function(err) {
            return api.errorCallback(err);
        };
        
    }]);

})();