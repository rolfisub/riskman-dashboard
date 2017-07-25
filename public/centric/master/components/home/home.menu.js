(function() {
    'use strict';

    angular
        .module('app.home')
        .run(homeRun);
    homeRun.$inject = ['Menu'];

    function homeRun(Menu) {

        var menuItem = {
            name: 'Home',
            sref: 'app.home',
            // iconclass: 'ion-aperture',
            imgpath: 'app/img/icons/aperture.svg',
            order: 1,
//            label: {
//                count: 2,
//                classname: 'badge bg-success'
//            }
        };

        Menu.addItem(menuItem);

    }
})();
