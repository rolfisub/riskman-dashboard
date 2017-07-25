(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('filestyle', filestyle);

    function filestyle() {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                options: '='
            }
        };
        return directive;

        function link(scope, element) {
            element.filestyle(
                angular.extend(scope.options || {}, element.data() || {})
            );
        }
    }

})();
