(function() {
    'use strict';

    angular
        .module('app.ripple')
        .directive('ripple', ripple);

    function ripple() {

        return {
            restrict: 'C',
            link: link
        };

        function link(scope, element) {
            new Ripple(element);
        }

    }

})();
