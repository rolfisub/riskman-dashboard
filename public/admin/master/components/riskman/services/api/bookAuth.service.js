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
        
        this.isUserAvail = function(data) {
            var obj = {
                client_id: data.client_id,
                client_secret: '',
                query_type: data.query_type
            };
            return api.create('/bookAuth', obj);
        };
        
        this.deleteBookAuth = function(bookId) {
            return api.delete('/bookAuth/' + bookId);
        };
        
        
        this.onError = function(response) {
            api.errorCallback(response);
        };

    }]);
})();

