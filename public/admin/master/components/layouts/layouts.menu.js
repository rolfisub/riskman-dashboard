(function() {
    'use strict';

    angular
        .module('app.layouts')
        .run(layoutsRun);

    layoutsRun.$inject = ['Menu'];

    function layoutsRun(Menu) {

        var menuItem = {
            name: 'Layouts',
            sref: 'app.layouts',
            order: 5.1,
            // iconclass: 'ion-grid',
            imgpath: 'app/img/icons/grid.svg',
            subitems: [{
                name: 'Columns',
                sref: 'app.layouts.columns'
            }, {
                name: 'Overlap',
                sref: 'app.layouts.overlap'
            }, {
                name: 'Boxed',
                sref: 'app.layouts.boxed'
            }, {
                name: 'Tabs Deep Link',
                sref: 'app.layouts.tabs.home',
                // helper to check deeplinking in tabs
                srefParent: 'app.layouts.tabs'
            }, {
                name: 'Containers',
                sref: 'app.layouts.containers'
            }]
        };

        Menu.addItem(menuItem);

    }
})();
