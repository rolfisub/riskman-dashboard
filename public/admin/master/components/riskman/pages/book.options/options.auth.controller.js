(function() {
    'use strict';

    angular
        .module('riskman.book.options')
        .controller('OptionsAuthController', OptionsAuthController);

    OptionsAuthController.$inject = ['$scope', '$stateParams', 'book', 'bookAuth', 'adminFields'];

    function OptionsAuthController($scope, $stateParams, book, bookAuth, adminFields) {
        var c = this;
        
        /*
         * model for book
         */
        c.myBook = {
            id: $stateParams.bookId,
            name: 'test book mock'
        };
        
        /**
         * bookAuth model
         */
        c.bookAuth = {
            client_id: "",
            client_secret: "",
            exists: false
        };
        
        /**
         * delete oauth credentials
         */
        c.deleteAuth = function(){
            c.bookAuth.exists = false;
            c.bookAuth.client_id = '';
            c.bookAuth.client_secret = '';
            c.userError.valid = true;
            c.passError.valid = true;
            c.userAvail = -1;
            c.passAvail = -1;
        };
        
        /*
         * validation error msg model
         */
        c.userError = {
            valid: true,
            msg: ''
        };
        
        //is user taken -1 represents not checked
        c.userAvail = -1;
        
        //is password valid
        c.passAvail = -1;
        
        /*
         * validation error msg model
         */
        c.passError = {
            valid: true,
            msg: ''
        };
        
        /**
         * Validate username and password minimum requirements
         */
        c.validateCreateAuth = function(data) {
            var isUser = adminFields.username(data.client_id);
            var isPass = adminFields.password(data.client_secret);
            
            if(!isUser.valid) {
                isUser.type = 'user';
                return isUser;
            }
            
            if(!isPass.valid){
                isPass.type = 'pass';
                return isPass;
            }
            
            return {
                valid: true,
                msg: ''
            };
        };
        
        /*
         * Validate password on change
         */
        c.validatePass = function() {
            var isPass = adminFields.password(c.bookAuth.client_secret);
            angular.merge(c.passError, isPass);
            if(!c.passError.valid) {
                c.passAvail = 0;
            } else {
                c.passAvail = 1;
            }
            
            if(c.bookAuth.client_secret === '') {
                c.passAvail = -1;
            }
        };
        
        /*
         * Validate password on change
         */
        c.validateUser = function() {
            var isUser = adminFields.username(c.bookAuth.client_id);
            angular.merge(c.userError, isUser);
        };
        
        /**
         * 
         * @returns {undefined}
         */
        c.isUserAvail = function() {
            var data = c.bookAuth;
            //check if user is taken
            var isValid = adminFields.username(data.client_id);
            if(isValid.valid) {
                var r = bookAuth.isUserAvail({
                    client_id: data.client_id,
                    query_type: 'UserAvail'
                });
                r.then(function(res){
                    c.userAvail = 1;
                }, function(err){
                    if(err.status === 400) {
                        c.userAvail = 0;
                    } else {
                        bookAuth.onError(err);
                    }
                });
            } else {
                c.userAvail = -1;
            }
        };
        
        
        //model for can save
        c.saveDisable = true;
        
        /*
         * check if we can save
         */
        c.isFormValid = function() {
            if(c.userAvail === 0) {
                c.saveDisable = true;
            } else if(!c.userError.valid){
                c.saveDisable = true;
            } else if(!c.passError.valid){
                c.saveDisable = true;
            } else {
                c.saveDisable = false;
            }
        };
        
        /*
         * save action
         */
        c.saveAuth = function() {
            var data = {
                client_id: c.bookAuth.client_id,
                client_secret: c.bookAuth.client_secret
            };
            
            var isValid = c.validateCreateAuth(data);
            if(!isValid.valid) {
                if(isValid.type === 'user') {
                    angular.merge(c.userError, isValid);
                } else {
                    c.userError.valid = true;
                }
                if(isValid.type === 'pass') {
                    angular.merge(c.passError, isValid);
                } else {
                    c.passError.valid = true;
                }
            } else {
                c.userError.valid = true;
                c.passError.valid = true;
                var r = bookAuth.createUpdateBook(c.myBook.id, data);
                r.then(function(res){
                    c.bookAuthInit(c.myBook.id);
                }, bookAuth.onError)
            }
        };

        /*
         * create oauth credentials
         */
        c.createAuth = function(){
            c.bookAuth.exists = true;
        };
        
        /*
         * get the book auth data
         */
        c.bookAuthInit = function(bookId) {
            var r = bookAuth.getBookAuth(bookId);
            r.then(function(res){
                if(res.data.bookAuth.length !== 0) {
                    angular.merge(c.bookAuth, res.data.bookAuth);
                    c.bookAuth.exists = true;
                } else {
                    c.bookAuth.exists = false;
                }
            }, bookAuth.onError);
        };
        
        /**
         * Generate random password
         */
        c.generatePass = function(){
            var regex = /[a-zA-Z0-9]/;
            var pass = generatePassword(12, false, regex);
            while(!adminFields.password(pass).valid){
                pass = generatePassword(12, false, regex);
            }
            c.bookAuth.client_secret = pass;
        };
        
        
        /**
         * init the main page
         * @returns {undefined}
         */
        c.init = function() {
            var r = book.getBook(c.myBook.id);
            r.then(function(res){
                c.myBook = res.data.book;
            }, book.onError);
            
            c.bookAuthInit(c.myBook.id);
        };
        
        
        
        /**
         * listens for refresh calls
         */
        $scope.$on('initOptions', function(data){
            c.init();
        });
        
        //triggers on init
        c.init();
        
        
    }
})();