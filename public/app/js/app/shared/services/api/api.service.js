/**
 * Main api CRUD service
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */

define('api',['admin'], function(admin){
    /**
     * API service wrapper to make Ajax calls for Trxade
     */
    admin.sp.service('api', ['$http', function ($http) {

        //'/rest' path is assumed as base path
        var baseUrl = '/rest';

        /**
         * Sets base url if needed
         * @param {string} url
         * @returns {null}
         */
        this.setBaseUrl = function (url) {
            baseUrl = url;
        };
        
        /**
         * Default handler for Ajax errors, log to console the response object
         * @param {object} response
         * @returns {response}
         */
        this.errorCallback = function(response) {
            var value = {
                string: 'Error:', 
                data: response
            };
            console.log(value);
            return response;
        }; 
        
        /**
         * Makes a POST HTTP request
         * @param {string} url
         * @param {object} data
         * @returns {request}
         */
        this.create = function(url, data){
            return $http({
               method: 'POST',
               url: baseUrl + url,
               data: data
            });
        };
        
        /**
         * Makes a GET HTTP request
         * @param {string} url
         * @returns {request}
         */
        this.read = function(url){
            return $http({
               method: 'GET',
               url: baseUrl + url
            });
        };

        /**
         * Makes a PUT HTTP request
         * @param {string} url
         * @param {object} data
         * @returns {request}
         */
        this.update = function(url, data) {
            return $http({
                method: 'PUT',
                url: baseUrl + url,
                data: data
            });
        };
        
        /**
         * Makes a DELETE HTTP request
         * @param {string} url
         * @returns {request}
         */
        this.delete = function(url) {
            return $http({
                method: 'DELETE',
                url: baseUrl + url
            });
        };

    }]);
});

