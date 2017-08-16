(function() {
    'use strict';

    angular
        .module('riskman.home')
        .run(homeRun);
    homeRun.$inject = ['Menu'];

    function homeRun(Menu) {

        var menuItem = {
            name: 'Home',
            sref: 'riskman.home',
            iconclass: 'ion-aperture',
            //imgpath: 'app/img/icons/aperture.svg',
            order: 1,
//            label: {
//                count: 2,
//                classname: 'badge bg-success'
//            }
        };

        Menu.addItem(menuItem);

    }
})();
