(function() {
    'use strict';

    angular
        .module('app.core')
        .run(coreRun);

    coreRun.$inject = ['$rootScope'];

    function coreRun($rootScope) {

        $rootScope.theme = function() {
            return $rootScope.app.theme;
        }

        $rootScope.layout = function() {
            return [

                $rootScope.sidebarVisible ? 'sidebar-visible' : '',
                $rootScope.app.sidebar.offcanvas ? 'sidebar-offcanvas' : '',
                $rootScope.sidebarOffcanvasVisible ? 'offcanvas-visible' : ''

            ].join(' ');

        }
    }

})();