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
        .service('bookCentline', ['api', function (api) {
        
        this.getBookCentline = function(bookId) {   
            return api.read('/bookCentline/' + bookId);
        };
        
        this.updateBookCentline = function (bookId, data) {
            return api.update('/bookCentline/' + bookId, data);
        };        
        
        this.onError = function(response) {
            api.errorCallback(response);
        };

    }]);
})();

