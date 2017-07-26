(function() {
    'use strict';

    angular
        .module('riskman.admins')
        .run(adminsRun);

    adminsRun.$inject = ['Menu'];

    function adminsRun(Menu) {

        var menuItem = {
            name: 'Administrators',
            sref: 'riskman.admins',
            order: 9,
           //iconclass: 'ion-person-stalker',
            imgpath: 'app/img/icons/person-stalker.svg',
        };

        Menu.addItem(menuItem);

    }
})();
