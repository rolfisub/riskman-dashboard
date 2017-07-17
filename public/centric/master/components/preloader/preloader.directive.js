(function() {
    'use strict';

    angular
        .module('app.preloader')
        .directive('preloader', preloader);

    preloader.$inject = ['$animate', '$timeout', '$q'];

    function preloader($animate, $timeout, $q) {

        var directive = {
            restrict: 'EAC',
            template: '<div class="preloader-progress">' +
                '<div class="preloader-progress-bar" ' +
                'ng-style="{width: loadCounter + \'%\'}"></div>' +
                '</div>',
            link: link
        };
        return directive;

        ///////

        function link(scope, el) {

            scope.loadCounter = 0;

            var counter = 0,
                timeout;

            // disables scrollbar
            angular.element('body').css('overflow', 'hidden');
            // ensure class is present for styling
            el.addClass('preloader');

            appReady().then(function() {
                $timeout(endCounter, 500);
            });

            timeout = $timeout(startCounter);

            ///////

            function startCounter() {

                var remaining = 100 - counter;
                counter = counter + (0.0175 * Math.pow(1 - Math.sqrt(remaining), 2));

                scope.loadCounter = parseInt(counter, 10);

                timeout = $timeout(startCounter, 20);
            }

            function endCounter() {

                $timeout.cancel(timeout);

                scope.loadCounter = 100;

                $timeout(function() {
                    // animate preloader hiding
                    $animate.addClass(el, 'preloader-hidden');
                    // retore scrollbar
                    angular.element('body').css('overflow', '');
                }, 300);
            }

            function appReady() {
                var deferred = $q.defer();
                var fired = 0;
                // if this doesn't sync with the real app ready
                // a custom event must be used instead
                var off = scope.$on('$viewContentLoaded', function() {
                    fired++;
                    // Wait for two events since we have two main ui-view
                    if ( fired > 1 ) {
                        deferred.resolve();
                        off();
                    }
                });

                return deferred.promise;
            }

        } //link
    }

})();
