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
        .service('books', ['api', function (api) {
        
        
        //private functions
        this.getBooksList = function() {   
            return api.read('/books');
        };
        
        
        this.onError = function(response) {
            api.errorCallback(response);
        };

    }]);
})();

