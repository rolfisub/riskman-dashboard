(function() {
    'use strict';

    angular
        .module('app.charts')
        .run(chartsRoute);

    chartsRoute.$inject = ['Router'];
    function chartsRoute(Router){

        Router.state('app.charts', {
            url: '/charts',
            title: 'Charts',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.charts.flot', {
            url: '/flot',
            title: 'Charts Flot',
            templateUrl: 'flot.html',
            require: ['angular-flot']
        })
        .state('app.charts.pie', {
            url: '/radial',
            title: 'Charts Radial',
            templateUrl: 'radial.html',
            require: ['ui.knob', 'easypiechart']
        })
        .state('app.charts.rickshaw', {
            url: '/rickshaw',
            title: 'Charts Rickshaw',
            templateUrl: 'rickshaw.html',
            require: ['angular-rickshaw']
        })
        ;
    }

})();
