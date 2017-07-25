(function() {
    'use strict';

    angular
        .module('app.layouts')
        .run(layoutsRoute);

    layoutsRoute.$inject = ['Router'];
    function layoutsRoute(Router){

        Router.state('app.layouts', {
            url: '/layouts',
            title: 'Layouts',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.layouts.columns', {
            url: '/columns',
            title: 'Columns',
            templateUrl: 'layouts.columns.html'
        })
        .state('app.layouts.boxed', {
            url: '/boxed',
            title: 'Boxed',
            templateUrl: 'layouts.boxed.html'
        })
        .state('app.layouts.overlap', {
            url: '/overlap',
            title: 'Overlap',
            templateUrl: 'layouts.overlap.html'
        })
        .state('app.layouts.tabs', {
            url: '/tabs',
            title: 'Tabs',
            abstract: true,
            templateUrl: 'layouts.tabs.html'
        })
            .state('app.layouts.tabs.home', {
                url: '/home',
                title: 'Tabs Home',
                template: '<h4>Home view</h4>'
            })
            .state('app.layouts.tabs.profile', {
                url: '/profile',
                title: 'Tabs Profile',
                template: '<h4>Profile view</h4>'
            })
            .state('app.layouts.tabs.messages', {
                url: '/messages',
                title: 'Tabs Messages',
                template: '<h4>Messages view</h4>'
            })
        .state('app.layouts.containers', {
            url: '/containers',
            title: 'Containers',
            templateUrl: 'layouts.containers.html'
        })
        ;
    }

})();
