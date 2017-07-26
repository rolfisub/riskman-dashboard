(function() {
    'use strict';

    angular
        .module('riskman.pages')
        .run(riskmanRoute);

    riskmanRoute.$inject = ['Router'];

    function riskmanRoute(Router) {

        Router.state('riskman', {
            url: '/riskman',
            title: 'RiskMan',
            abstract: true,
            templateUrl:'core.layout.html',
            require: ['icons', 'ng-mfb', 'md-colors', 'screenfull']
        });
    }

})();