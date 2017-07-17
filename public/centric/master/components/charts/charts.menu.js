(function() {
    'use strict';

    angular
        .module('app.charts')
        .run(chartsRun);

    chartsRun.$inject = ['Menu'];

    function chartsRun(Menu) {

        var menuItem = {
            name: 'Charts',
            sref: 'app.charts',
            // iconclass: 'ion-connection-bars',
            imgpath: 'app/img/icons/connection-bars.svg',
            order: 3,
            subitems: [{
                name: 'Flot',
                sref: 'app.charts.flot'
            }, {
                name: 'Radial',
                sref: 'app.charts.pie'
            }, {
                name: 'Rickshaw',
                sref: 'app.charts.rickshaw'
            }]
        };

        Menu.addItem(menuItem);

    }
})();
