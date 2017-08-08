(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('sparkline', sparkline);

    sparkline.$inject = ['$timeout', '$window'];

    function sparkline($timeout, $window) {

        return {
            restrict: 'EA',
            scope: {
                'values': '=?',
                'options': '=?'
            },
            link: link
        };

        function link(scope, element) {
            var $element = $(element);
            var values = scope.values;
            var options = scope.options;

            // timeouts executes after interpolation
            $timeout(function() {
                options = $.extend({}, options, $element.data());
                if (!values || !options) return;
                initSparkLine();
            });

            function initSparkLine() {

                options.type = options.type || 'bar'; // default chart is bar
                options.disableHiddenCheck = true;

                $element.sparkline(values, options);

                if (options.resize) {
                    var tm;
                    $($window).resize(function() {
                        // don't allow multiple timers
                        $timeout.cancel(tm);
                        tm = $timeout(function() {
                            $element.sparkline(values, options);
                        });
                    });
                }
            }
        }
    }

})();
