/**
 * Admins Create Validator library
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */

(function() {
    'use strict';
    angular
        .module("app.services")
        .service('adminCreateValidate', ['adminFields', function (fields) {
        
        /**
         * model for errors
         * @type result
         */
        var createDataStatus = {
            username:{
                msg:'',
                valid: true
            },
            password:{
                msg:'',
                valid:true
            },
            password2:{
                msg:'',
                valid:true
            },
            email:{
                msg:'',
                valid:true
            },
            firstname:{
                msg:'',
                valid:true
            },
            lastname:{
                msg:'',
                valid:true
            }
        };
        
        /**
         * 
         * @param {type} field
         * @param {type} dataStatus
         * @param {type} createData
         * @returns {unresolved}
         */
        this.validateObjectField = function(field, dataStatus, createData) {
            var result = angular.merge(createDataStatus, dataStatus);
            if(field === 'username') {
                result.username = fields.username(createData.username);
            }
            if(field === 'password') {
                result.password = fields.password(createData.password);
            }
            if(field === 'password2') {
                result.password2 = fields.password2(createData.password, createData.password2);
            }
            if(field === 'firstname') {
                result.firstname = fields.firstname(createData.firstname);
            }
            if(field === 'lastname') {
                result.lastname = fields.lastname(createData.lastname);
            }
            if(field === 'email') {
                result.email = fields.email(createData.email);
            }
            createDataStatus = result;
            return result;
        };
        
        /**
         * 
         * @param {type} field
         * @param {type} data
         * @returns {unresolved}
         */
        this.validateField = function(field, data) {
            if(field === 'username') {
                return fields.username(data.username);
            }
            if(field === 'password') {
                return fields.password(data.password);
            }
            if(field === 'password2') {
                return fields.password2(data.password, data.password2);
            }
            if(field === 'firstname') {
                return fields.firstname(data.firstname);
            }
            if(field === 'lastname') {
                return fields.lastname(data.lastname);
            }
            if(field === 'email') {
                return fields.email(data.email);
            }
        };
        
        /**
         * 
         * @param {type} createData
         * @returns {Boolean}
         */
        this.isCreateValid = function(createData) {
            //check form is not empty
            var isEmpty = this.isCreateDataEmpty(createData);
            if(isEmpty) {
                return false;
            }
            return this.isFormValid(createData);
        };
        
        /**
         * 
         * @param {type} data
         * @returns {Boolean}
         */
        this.isFormValid = function(data) {
            //check form is valid
            var isValid = true;
            angular.forEach(data, function(value, key) {
                var val = this.validateField(key, data);
                if(!val.valid) {
                    isValid = false;
                }
            }, this);
            return isValid;
        };
        
        /**
         * 
         * @param {type} createData
         * @returns {Boolean}
         */
        this.isCreateDataEmpty = function(createData){
            var isEmpty = true;
            angular.forEach(createData, function(value,key){
                if(value !== '') {
                    isEmpty = false;
                }
            });
            return isEmpty;
        };

    }]);
})();

