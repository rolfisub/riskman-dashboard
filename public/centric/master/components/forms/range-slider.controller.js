(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('RangeSliderController', RangeSliderController);

    function RangeSliderController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            // Set initial values
            vm.value = 50;
            vm.range = {
                min: 20,
                max: 80
            };
            vm.formatted = 30;
            vm.range2 = {
                min: 20,
                max: 80
            };
            // return the value converted
            vm.priceFormat = function(value) {
                return '$' + value.toString();
            };
        }
    }
})();
