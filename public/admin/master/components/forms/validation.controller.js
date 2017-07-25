(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormValidationController', FormValidationController);

    function FormValidationController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.notBlackListed = function(value) {
                var blacklist = ['bad@mail.com', 'another@email.com'];
                return blacklist.indexOf(value) === -1;
            };

            vm.words = function(value) {
                return value && value.split(' ').length;
            };

            // Submit form
            vm.submitForm = function(formName) {
                if (vm[formName].$valid) {
                    alert('Submitted!!');
                } else {
                    console.log('Form name:' + formName + ': Not valid!!');
                    return false;
                }
            };

        }
    }
})();
