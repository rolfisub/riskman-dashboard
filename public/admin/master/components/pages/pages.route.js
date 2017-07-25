(function() {
    'use strict';

    angular
        .module('app.pages')
        .run(pagesRoute);

    pagesRoute.$inject = ['Router'];
    function pagesRoute(Router){

        Router.state('app.pages', {
            url: '/pages',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.pages.blog', {
            url: '/Blog',
            title: 'Blog',
            templateUrl: 'blog.html'
        })
        .state('app.pages.article', {
            url: '/Article',
            title: 'Article',
            templateUrl: 'blog.article.html'
        })
        .state('app.pages.profile', {
            url: '/Profile',
            title: 'Profile',
            templateUrl: 'profile.html',
            require: ['xeditable']
        })
        .state('app.pages.gallery', {
            url: '/Gallery',
            title: 'Gallery',
            templateUrl: 'gallery.html',
            require: ['blueimp-gallery']
        })
        .state('app.pages.wall', {
            url: '/wall',
            title: 'Wall',
            templateUrl: 'wall.html'
        })
        .state('app.pages.search', {
            url: '/Search',
            title: 'Search',
            templateUrl: 'search.html'
        })
        .state('app.pages.messages', {
            url: '/messages',
            title: 'Messages Board',
            templateUrl: 'messages.html'
        })
        .state('app.pages.timeline', {
            url: '/timeline',
            title: 'Timeline',
            templateUrl: 'timeline.html'
        })
        .state('app.pages.invoice', {
            url: '/invoice',
            title: 'Invoice',
            templateUrl: 'invoice.html'
        })
        .state('app.pages.pricing', {
            url: '/pricing',
            title: 'Pricing',
            templateUrl: 'pricing.html'
        })
        .state('app.pages.contacts', {
            url: '/contacts',
            title: 'Contacts',
            templateUrl: 'contacts.html'
        })
        .state('app.pages.projects', {
            url: '/projects',
            title: 'Projects',
            templateUrl: 'projects.html'
        })
        .state('app.pages.faq', {
            url: '/faq',
            title: 'FAQ',
            templateUrl: 'faq.html'
        })
        ;
    }

})();
