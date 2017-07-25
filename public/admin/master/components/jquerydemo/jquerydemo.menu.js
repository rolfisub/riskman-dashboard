(function() {
    'use strict';

    // This component is only used to provide a link in the menu
    // to the jQuery demo. It shows the menu support for direct
    // links using 'href' property.
    angular
        .module('centric')
        .run(jQueryDemoRun);
    jQueryDemoRun.$inject = ['Menu'];

    function jQueryDemoRun(Menu) {

        var menuItem = {
            name: 'HTML5/jQuery',
            href: '../html5jquery/',
            iconclass: 'ion-android-open',
            order: 99
        };

        //Menu.addItem(menuItem);

    }
})();
