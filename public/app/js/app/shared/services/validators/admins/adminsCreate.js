/**
 * Admins Create Validator library
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */

define('adminsCreate/validator',['admin'], function(admin){
    /**
     * API service wrapper to make Ajax calls for Trxade
     */
    admin.sp.service('adminCreateValidate', function () {
        
        this.username = function (username) {
            var field = 'Username'
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
                    msg: field + ' does not match your first password'
                };
            }
            return  {
                valid:true,
                msg:'',
            };
        };
        
        this.firstname = function(firstname) {
            var field = 'Firstname';
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
            var field = 'Lastname';
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
        
        
        this.validateObjectField = function(field, dataStatus, createData) {
            var result = angular.merge(createDataStatus, dataStatus);
            if(field === 'username') {
                result.username = this.username(createData.username);
            }
            if(field === 'password') {
                result.password = this.password(createData.password);
            }
            if(field === 'password2') {
                result.password2 = this.password2(createData.password, createData.password2);
            }
            if(field === 'firstname') {
                result.firstname = this.firstname(createData.firstname);
            }
            if(field === 'lastname') {
                result.lastname = this.lastname(createData.lastname);
            }
            if(field === 'email') {
                result.email = this.email(createData.email);
            }
            createDataStatus = result;
            return result;
        };
        
        this.validateField = function(field, data) {
            if(field === 'username') {
                return this.username(data.username);
            }
            if(field === 'password') {
                return this.password(data.password);
            }
            if(field === 'password2') {
                return this.password2(data.password, data.password2);
            }
            if(field === 'firstname') {
                return this.firstname(data.firstname);
            }
            if(field === 'lastname') {
                return this.lastname(data.lastname);
            }
            if(field === 'email') {
                return this.email(data.email);
            }
        };
        
        this.isEditValid = function(data) {
            //check form is valid
            return isFormValid(data);
        };
        
        this.isCreateValid = function(createData) {
            //check form is not empty
            var isEmpty = this.isCreateDataEmpty(createData);
            if(isEmpty) {
                return false;
            }
            return this.isFormValid(createData);
        };
        
        this.isFormValid = function(data) {
            //check form is valid
            var isValid = true;
            angular.forEach(data, function(value, key) {
                value = this.validateField(key, data);
                if(!value.valid) {
                    isValid = false;
                }
            }, this);
            return isValid;
        };
        
        this.isCreateDataEmpty = function(createData){
            var isEmpty = true;
            angular.forEach(createData, function(value,key){
                if(value !== '') {
                    isEmpty = false;
                }
            });
            return isEmpty;
        };

    });
});

