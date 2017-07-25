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
        
        this.getAdmins = function() {
            return api.read('/admins');
        };
        
        this.onError = function(err) {
            return api.errorCallback(err);
        };
        
    }]);

})();