(function() {
    'use strict';

    angular
        .module('app.core', [
            'app.router',
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'ngMessages',
            'pascalprecht.translate',
            'ui.bootstrap',
            'cfp.loadingBar',
            'ngSanitize',
            'ngResource',
            'ui.utils'
        ]);
})();
