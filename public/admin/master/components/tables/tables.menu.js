(function() {
    'use strict';

    angular
        .module('app.tables')
        .run(tablesRun);
    tablesRun.$inject = ['Menu'];

    function tablesRun(Menu) {

        var menuItem = {
            name: 'Tables',
            sref: 'app.tables',
            order: 5,
            // iconclass: 'ion-navicon',
            imgpath: 'app/img/icons/navicon.svg',
            subitems: [{
                name: 'Classic',
                sref: 'app.tables.classic'
            }, {
                name: 'Datatable',
                sref: 'app.tables.datatable'
            }, {
                name: 'ngTable',
                sref: 'app.tables.ngtable'
            }, {
                name: 'xEditable',
                sref: 'app.tables.xeditable'
            }]
        };

        Menu.addItem(menuItem);

    }
})();