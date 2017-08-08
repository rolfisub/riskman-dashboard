(function() {
    'use strict';

    angular
        .module('app.elements')
        .run(elementsRun);
    elementsRun.$inject = ['Menu'];

    function elementsRun(Menu) {

        var menuItem = {
            name: 'Elements',
            sref: 'app.elements',
            // iconclass: 'ion-levels',
            imgpath: 'app/img/icons/levels.svg',
            order: 6,
            subitems: [{
                name: 'Colors',
                sref: 'app.elements.colors'
            }, {
                name: 'Whiteframes',
                sref: 'app.elements.whiteframes'
            }, {
                name: 'Lists',
                sref: 'app.elements.lists'
            }, {
                name: 'Bootstrapui',
                sref: 'app.elements.bootstrapui'
            }, {
                name: 'Buttons',
                sref: 'app.elements.buttons'
            }, {
                name: 'Sweet-alert',
                sref: 'app.elements.sweet-alert'
            }, {
                name: 'Spinners',
                sref: 'app.elements.spinners'
            }, {
                name: 'Navtree',
                sref: 'app.elements.navtree'
            }, {
                name: 'Nestable',
                sref: 'app.elements.nestable'
            }, {
                name: 'Grid',
                sref: 'app.elements.grid'
            }, {
                name: 'Grid Masonry',
                sref: 'app.elements.grid-masonry-deck'
            }, {
                name: 'Typography',
                sref: 'app.elements.typography'
            }, {
                name: 'Icons',
                sref: 'app.elements.icons'
            }, {
                name: 'Utilities',
                sref: 'app.elements.utilities'
            }]
        };

        Menu.addItem(menuItem);

    }
})();
