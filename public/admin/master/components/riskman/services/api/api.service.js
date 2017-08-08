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
        .module("riskman.services")
        .service('api', ['$http','$state', function ($http, $state) {

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
            if(response.status === 403) {
                $state.go('user.login');
            } else {
                var value = {
                    string: 'Error:', 
                    data: response
                };
                console.log(value);
                return response;
            }
            
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
         * @param {object} data 
         * @returns {request}
         */
        this.deleteList = function(url, data) {
            return $http({
                method: 'DELETE',
                url: baseUrl + url,
                data: data,
                headers: {
                    "Content-Type": "application/json"
                }
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

        this.deleteById = function(url, param) {
            return $http({
                method: 'DELETE',
                url: baseUrl + url + '/' + param
            });
        };
    }]);

})();