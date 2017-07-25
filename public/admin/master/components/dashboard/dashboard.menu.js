(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(dashboardRun);
    dashboardRun.$inject = ['Menu'];

    function dashboardRun(Menu) {

        var menuItem = {
            name: 'Dashboard',
            sref: 'app.dashboard',
            // iconclass: 'ion-aperture',
            imgpath: 'app/img/icons/aperture.svg',
            order: 1,
            label: {
                count: 2,
                classname: 'badge bg-success'
            }
        };

        Menu.addItem(menuItem);

    }
})();
