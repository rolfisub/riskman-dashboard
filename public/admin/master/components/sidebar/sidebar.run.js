(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .run(sidebarRun);
    sidebarRun.$inject = ['$rootScope', '$window', '$document', '$timeout', 'APP_MEDIAQUERY'];

    function sidebarRun($rootScope, $window, $document, $timeout, APP_MEDIAQUERY) {
        // Sidebar API for mobile
        $rootScope.toggleSidebar = toggleSidebarState;
        $rootScope.closeSidebar = function() {
            toggleSidebarState(false);
        };
        $rootScope.openSidebar = function() {
            toggleSidebarState(true);
        };

        // Sidebar offcanvas API for desktops
        $rootScope.toggleSidebarOffcanvasVisible = function(state) {
            $rootScope.sidebarOffcanvasVisible = angular.isDefined(state) ? state : !$rootScope.sidebarOffcanvasVisible;
        };

        // ESC key close sidebar
        $document.on('keyup',function(e) {
             if (e.keyCode == 27) {
                $timeout(function() {
                    $rootScope.toggleSidebarOffcanvasVisible(false);
                });
            }
        });

        // Considerations for different APP states

        // on mobiles, sidebar starts off-screen
        if (isMobileScreen()) $timeout(function() {
            toggleSidebarState(false);
        });

        // hide sidebar when open a new view
        $rootScope.$on('$stateChangeStart', function() {
            if (isMobileScreen())
                toggleSidebarState(false);
            // Always hide offscreen sidebar when route change
            else
                $rootScope.toggleSidebarOffcanvasVisible(false);
        });

        // remove desktop offcanvas when app changes to mobile
        // so when it returns, the sidebar is shown again
        $window.addEventListener('resize', function() {
            if (isMobileScreen())
                $rootScope.toggleSidebarOffcanvasVisible(false);
        });

        ///////

        function toggleSidebarState(state) {
            //  state === true -> open
            //  state === false -> close
            //  state === undefined -> toggle
            $rootScope.sidebarVisible = angular.isDefined(state) ? state : !$rootScope.sidebarVisible;
        }

        function isMobileScreen() {
            return $window.innerWidth < APP_MEDIAQUERY.desktop;
        }
    }
})();
