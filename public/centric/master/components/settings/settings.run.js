(function() {
    'use strict';

    angular
        .module('app.settings')
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope'];

    function settingsRun($rootScope) {

        var themes = [
            'theme-1',
            'theme-2',
            'theme-3',
            'theme-4',
            'theme-5',
            'theme-6',
            'theme-7',
            'theme-8',
            'theme-9',
        ]

        // Global Settings
        // -----------------------------------
        $rootScope.app = {
            name: 'Centric',
            description: 'Bootstrap Admin Template',
            year: ((new Date()).getFullYear()),
            layout: {
                rtl: false
            },
            sidebar: {
                over: false,
                showheader: true,
                showtoolbar: true,
                offcanvas: false
            },
            header: {
                menulink: 'menu-link-slide'
            },
            footerHidden: false,
            viewAnimation: 'ng-fadeInLeftShort',
            theme: themes[0],
            currentTheme: 0
        };

        $rootScope.themes = themes;

    }

})();