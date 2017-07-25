(function() {
    'use strict';

    angular
        .module('app.maps')
        .run(mapsRoute);

    mapsRoute.$inject = ['Router'];

    function mapsRoute(Router) {

        Router.state('app.maps', {
                url: '/maps',
                title: 'Maps',
                abstract: true,
                template: '<div ui-view class="ng-fadeInLeftShort"></div>'
            })
            .state('app.maps.google', {
                url: '/google',
                title: 'Google Maps',
                templateUrl: 'google-map.html',
                require: ['lodash', 'uiGmapgoogle-maps']
            })
            .state('app.maps.full', {
                url: '/google-full',
                title: 'Fullsize Google Map',
                templateUrl: 'google-map-full.html',
                require: ['lodash', 'uiGmapgoogle-maps']
            })
            .state('app.maps.vector', {
                url: '/vector',
                title: 'Vector Maps',
                templateUrl: 'vector-map.html',
                require: ['vector-map', 'vector-map-maps']
            })
            .state('app.maps.datamaps', {
                url: '/datamaps',
                title: 'Datamaps',
                templateUrl: 'datamaps.html',
                require: ['datamaps']
            });
    }

})();
