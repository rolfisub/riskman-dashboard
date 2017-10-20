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
        .service('bookRanking', ['api', function (api) {
        
        this.getBookRanking = function(bookId) {   
            return api.read('/bookRanking/' + bookId);
        };
        
        this.updateBookRanking = function (bookId, data) {
            return api.update('/bookRanking/' + bookId, data);
        };        
        
        this.onError = function(response) {
            api.errorCallback(response);
        };

    }]);
})();

