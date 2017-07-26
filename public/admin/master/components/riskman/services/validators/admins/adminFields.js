/**
 * Admins Fields Validator service
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */

(function() {
    'use strict';
    angular
        .module("app.services")
        .service('adminFields', function () {
        
        /**
         * validates the username field
         * @param {type} username
         * @returns { valid: true/false, msg: 'error message'}
         */
        this.username = function (username) {
            var field = 'Username';
            if(username.length === 0) {
                return {
                    valid : false,
                    msg : field + ' can\'t be empty.'
                };
            }
            if(username.length < 4) {
                return {
                    valid : false,
                    msg : field + ' can\'t be less than 4 characters.'
                };
            }
            return  {
                valid: true,
                msg: ''
            };
        };
        
        var countUppercase = function (str) {
            var count = 0;
            var len = str.length;
            for(var i = 0; i < len; i++) {
                if(/[A-Z]/.test(str.charAt(i))) count++;
            }
            return count;
        };
        
        var countLowercase = function (str) {
            var count = 0;
            var len = str.length;
            for(var i = 0; i < len; i++) {
                if(/[a-z]/.test(str.charAt(i))) count++;
            }
            return count;
        };
        
        var countNumeric = function (str) {
            var count = 0;
            var len = str.length;
            for(var i = 0; i < len; i++) {
                if(/[0-9]/.test(str.charAt(i))) count++;
            }
            return count;
        };
        
        this.password = function(password) {
            var field = 'Password';
            if(password.length === 0) {
                return {
                    valid : false,
                    msg : field + ' can\'t be empty.'
                };
            }
            if(password.length < 8) {
                return {
                    valid : false,
                    msg : field + ' can\'t be less than 8 characters.'
                };
            }
            if (countUppercase(password) < 1) {
                return {
                    valid : false,
                    msg : field + ' needs at least 1 Uppercase letter.'
                };
            }
            if (countLowercase(password) < 1) {
                return {
                    valid : false,
                    msg : field + ' needs at least 1 Lowercase letter.'
                };
            }
            if (countNumeric(password) < 1) {
                return {
                    valid : false,
                    msg : field + ' needs at least 1 Digit.'
                };
            }
            return  {
                valid: true,
                msg: ''
            };
        };
        
        
        
        this.password2 = function(password, password2) {
            var field = 'Password';
            var basic = this.password(password2);
            if(!basic.valid) {
                return basic;
            }
            if(password !== password2) {
                return {
                    valid: false,
                    msg: field + ' does not match.'
                };
            }
            return  {
                valid:true,
                msg:'',
            };
        };
        
        this.firstname = function(firstname) {
            var field = 'First Name';
            if(firstname.length === 0) {
                return {
                    valid : false,
                    msg : field + ' can\'t be empty.'
                };
            }
            return  {
                valid: true,
                msg:''
            };
        };
        
        this.lastname = function(lastname) {
            var field = 'Last Name';
            if(lastname.length === 0) {
                return {
                    valid : false,
                    msg : field + ' can\'t be empty.'
                };
            }
            return  {
                valid: true,
                msg:''
            };
        };
        
        this.email = function(email) {
            var field = 'Email';
            if(email.length === 0) {
                return {
                    valid : false,
                    msg : field + ' can\'t be empty.'
                };
            }
            var emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
            if(!emailPattern.test(email)) {
                return {
                    valid : false,
                    msg : field + ' is not a valid email address.'
                };
            }
            return  {
                valid: true,
                msg:''
            };
        };

    });
})();

