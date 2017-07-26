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
        .module("riskman.services")
        .service('auth', ['api','$state', function (api, $state) {

        this.auth = function(data) {
            if(data.username && data.password) {
                return api.create('/auth', data);
            } 
            return false;
        };
        
        this.logout = function() {
            var data = {
                id: 'me'
            };
            
            return api.deleteList('/auth', data);
        };
        
        this.onError = function(err) {
            return api.errorCallback(err);
        };
    }]);

})();