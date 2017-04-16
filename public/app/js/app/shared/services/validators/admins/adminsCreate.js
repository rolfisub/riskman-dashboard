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
        
        this.validateField = function(field, createData) {
            if(field === 'username') {
                return this.username(createData.username);
            }
            if(field === 'password') {
                return this.password(createData.password);
            }
            if(field === 'password2') {
                return this.password2(createData.password, createData.password2);
            }
            if(field === 'firstname') {
                return this.firstname(createData.firstname);
            }
            if(field === 'lastname') {
                return this.lastname(createData.lastname);
            }
            if(field === 'email') {
                return this.email(createData.email);
            }
        };
        
        this.isFormValid = function(createData) {
            //check form is not empty
            var isEmpty = this.isCreateDataEmpty(createData);
            if(isEmpty) {
                return false;
            }
            //check form is valid
            var isValid = true;
            angular.forEach(createDataStatus, function(value, key) {
                value = this.validateField(key, createData);
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

