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
        .module("app.services")
        .service('auth', ['api', function (api) {

        this.auth = function(data) {
            if(data.username && data.password) {
                return api.create('/auth', data);
            } 
            return false;
        };
    }]);

})();