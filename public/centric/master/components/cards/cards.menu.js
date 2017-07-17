(function() {
    'use strict';

    angular
        .module('app.cards')
        .run(cardsRun);

    cardsRun.$inject = ['Menu'];

    function cardsRun(Menu) {

        var menuItem = {
            name: 'Cards',
            sref: 'app.cards',
            order: 2,
            // iconclass: 'ion-radio-waves',
            imgpath: 'app/img/icons/radio-waves.svg'
        };

        Menu.addItem(menuItem);

    }
})();
