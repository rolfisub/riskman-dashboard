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
        
        this.updateBook = function(id, data){
            return api.update('/books/' + id, data);
        };
        
        //private functions
        this.getBooksList = function() {   
            return api.read('/books');
        };
        
        
        this.onError = function(response) {
            api.errorCallback(response);
        };

    }]);
})();

