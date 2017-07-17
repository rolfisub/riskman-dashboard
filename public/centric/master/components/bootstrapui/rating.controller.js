(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('RatingDemoCtrl', RatingDemoCtrl);

    function RatingDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.rate = 7;
            vm.max = 10;
            vm.isReadonly = false;

            vm.hoveringOver = function(value) {
                vm.overStar = value;
                vm.percent = 100 * (value / vm.max);
            };

            vm.ratingStates = [{
                stateOn: 'icon-2x ion-android-radio-button-on',
                stateOff: 'icon-2x ion-android-radio-button-off'
            }, {
                stateOn: 'icon-2x ion-android-star',
                stateOff: 'icon-2x ion-android-star-outline'
            }, {
                stateOn: 'icon-2x ion-android-folder',
                stateOff: 'icon-2x ion-android-folder-open'
            }];
        }
    }
})();
