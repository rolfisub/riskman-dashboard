/**
 * Admins Edit Validator library
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */
(function() {
    'use strict';
    angular
        .module("app.services")
        .service('adminEditValidate', ['adminFields', function (fields) {
        
        /**
         * model for errors
         * @type result
         */
        var editDataStatus = {
            username:{
                msg:'',
                valid: true
            },
            password:{
                msg:'',
                valid:true
            },
            passwordnew:{
                msg:'',
                valid:true
            },
            passwordnew2:{
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
        this.validateObjectField = function(field, dataStatus, editData) {
            var result = angular.merge(editDataStatus, dataStatus);
            if(field === 'username') {
                result.username = fields.username(editData.username);
            }
            if(field === 'password') {
                result.password = fields.password(editData.password);
            }
            if(field === 'passwordnew') {
                result.passwordnew = fields.password(editData.passwordnew);
            }
            if(field === 'passwordnew2') {
                result.passwordnew2 = fields.password2(editData.passwordnew, editData.passwordnew2);
            }
            if(field === 'firstname') {
                result.firstname = fields.firstname(editData.firstname);
            }
            if(field === 'lastname') {
                result.lastname = fields.lastname(editData.lastname);
            }
            if(field === 'email') {
                result.email = fields.email(editData.email);
            }
            editDataStatus = result;
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
            if(field === 'passwordnew') {
                return fields.password(data.passwordnew);
            }
            if(field === 'passwordnew2') {
                return fields.password2(data.passwordnew, data.passwordnew2);
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
        this.isEditValid = function(editData) {
            //check form is not empty
            var isEmpty = this.isDataEmpty(editData);
            if(isEmpty) {
                return false;
            }
            return this.isFormValid(editData);
        };
        
        /**
         * 
         * @param {type} data
         * @returns {Boolean}
         */
        this.isFormValid = function(data) {
            //check form is valid
            var isValid = true;
            var except = [
                'password',
                'passwordnew',
                'passwordnew2'
            ];
            angular.forEach(data, function(value, key) {
                if(except.indexOf(key) === -1) {
                    var val = this.validateField(key, data);
                    if(!val.valid) {
                        isValid = false;
                    }
                } else {
                    if(value !== '') {
                        var val = this.validateField(key, data);
                        if(!val.valid) {
                            isValid = false;
                        }
                    }
                }
            }, this);
            
            //if passwordnew and passwordnew2 is not empty password is required
            if(data.passwordnew !== '' && data.passwordnew2 !== '' && isValid) {
                if(data.password === '') {
                    isValid = false;
                }
            }
            
            //passwordnew2 cannot be empty if password is defined
            if(data.passwordnew !== '' && data.passwordnew2 === '') {
                isValid = false;
            }
            
            
            return isValid;
        };
        
        /**
         * 
         * @param {type} createData
         * @returns {Boolean}
         */
        this.isDataEmpty = function(editData){
            var isEmpty = false;
            var optionalEmpty = [
                'password',
                'passwordnew',
                'passwordnew2'
            ];
            angular.forEach(editData, function(value, key){
                if(value === '' && optionalEmpty.indexOf(key) === -1) {
                    isEmpty = true;
                }
            });
            return isEmpty;
        };
    }]);
})();

