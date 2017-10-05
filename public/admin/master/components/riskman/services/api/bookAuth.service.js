/**
 * Admins rest interface
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */

(function() {
    'use strict';
    angular
        .module("riskman.services")
        .service('bookAuth', ['api', function (api) {
        
        //private functions
        this.getBookAuth = function(bookId) {   
            return api.read('/bookAuth/' + bookId);
        };
        
        this.createUpdateBook = function (bookId, data) {
            return api.update('/bookAuth/' + bookId, data);
        };
        
        
        this.onError = function(response) {
            api.errorCallback(response);
        };

    }]);
})();

