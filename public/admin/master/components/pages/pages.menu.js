(function() {
    'use strict';

    angular
        .module('app.pages')
        .run(pagesRun);

    pagesRun.$inject = ['Menu'];

    function pagesRun(Menu) {

        var menuItem = {
            name: 'Pages',
            sref: 'app.pages',
            order: 8,
            // iconclass: 'ion-ios-browsers',
            imgpath: 'app/img/icons/ios-browsers.svg',
            subitems: [{
                name: 'Timeline',
                sref: 'app.pages.timeline'
            }, {
                name: 'Invoice',
                sref: 'app.pages.invoice'
            }, {
                name: 'Pricing',
                sref: 'app.pages.pricing'
            }, {
                name: 'Contacts',
                sref: 'app.pages.contacts'
            }, {
                name: 'FAQ',
                sref: 'app.pages.faq'
            }, {
                name: 'Projects',
                sref: 'app.pages.projects'
            }, {
                name: 'Blog',
                sref: 'app.pages.blog'
            }, {
                name: 'Article',
                sref: 'app.pages.article'
            }, {
                name: 'Profile',
                sref: 'app.pages.profile'
            }, {
                name: 'Gallery',
                sref: 'app.pages.gallery'
            }, {
                name: 'Wall',
                sref: 'app.pages.wall'
            }, {
                name: 'Search',
                sref: 'app.pages.search'
            }, {
                name: 'Messages Board',
                sref: 'app.pages.messages'
            }]
        };

        Menu.addItem(menuItem);

    }
})();