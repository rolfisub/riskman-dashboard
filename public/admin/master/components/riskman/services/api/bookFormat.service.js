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
        .service('bookFormat', ['api', function (api) {
        
        this.getBookFormat = function(bookId) {   
            return api.read('/bookFormat/' + bookId);
        };
        
        this.getTimeZones = function() {   
            return api.read('/bookFormat/getTimeZones');
        };
        
        this.getCurrencyRates = function() {
            return api.read('/bookFormat/getCurrencyRates');
        };
        
        this.updateBookFormat = function (bookId, data) {
            return api.update('/bookFormat/' + bookId, data);
        };        
        
        
        
        this.onError = function(response) {
            api.errorCallback(response);
        };
        

    }]);
})();

