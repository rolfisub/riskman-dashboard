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
        .service('book', ['api', function (api) {
        
        this.updateBook = function(id, data){
            return api.update('/book/' + id, data);
        };
        
        //private functions
        this.getBook = function(id) {   
            return api.read('/book/' + id);
        };
        
        
        this.onError = function(response) {
            api.errorCallback(response);
        };

    }]);
})();

