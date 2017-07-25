(function() {
    'use strict';

    angular
        .module('app.router')
        .config(routerConfig);

    routerConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];

    function routerConfig($ocLazyLoadProvider, APP_REQUIRES) {

        // Lazy Load modules configuration
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });

    }
})();
