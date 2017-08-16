(function() {
    'use strict';

    angular
        .module('riskman.books')
        .run(booksRun);

    booksRun.$inject = ['Menu'];

    function booksRun(Menu) {

        var menuItem = {
            name: 'Books',
            sref: 'riskman.books',
            order: 3,
            iconclass: 'ion-ios-game-controller-b',
            //imgpath: 'app/img/icons/person-stalker.svg',
        };

        Menu.addItem(menuItem);

    }
})();
