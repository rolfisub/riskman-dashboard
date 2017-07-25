(function() {
    'use strict';

    angular
        .module('app.maps')
        .run(mapsRun);

    mapsRun.$inject = ['Menu'];

    function mapsRun(Menu) {

        var menuItem = {
            name: 'Maps',
            sref: 'app.maps',
            // iconclass: 'ion-planet',
            imgpath: 'app/img/icons/planet.svg',
            order: 7,
            subitems: [{
                name: 'Google Maps Full',
                sref: 'app.maps.full'
            }, {
                name: 'Google Maps',
                sref: 'app.maps.google'
            },{
                name: 'Vector Maps',
                sref: 'app.maps.vector'
            },{
                name: 'Datamaps',
                sref: 'app.maps.datamaps'
            }]
        };

        Menu.addItem(menuItem);

    }
})();
