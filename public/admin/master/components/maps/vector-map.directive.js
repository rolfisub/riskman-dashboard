(function() {
    'use strict';

    angular
        .module('app.maps')
        .directive('vectorMap', vectorMap);

    vectorMap.$inject = ['$timeout'];

    function vectorMap($timeout) {
        var directive = {
            // bindToController: true,
            link: link,
            restrict: 'AE',
            scope: {
                mapOptions: '=',
                mapMarkers: '=',
                mapSeries: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
            // Height attribute
            if(attrs.height) element.css('height', attrs.height);

            $timeout(function() {
                // watch for changes
                scope.$watch('mapOptions', function() {
                    reload(element, scope.mapOptions);
                });
                scope.$watch('mapMarkers', function() {
                    scope.mapOptions.markers = scope.mapMarkers;
                    reload(element, scope.mapOptions);
                });
                scope.$watch('mapSeries', function() {
                    scope.mapOptions.series = scope.mapSeries;
                    reload(element, scope.mapOptions);
                });
            });

            function reload(el) {
                $(el).empty()
                    .vectorMap(scope.mapOptions);
            }
        }
    }

})();
