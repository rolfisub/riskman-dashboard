(function() {
    'use strict';

    angular
        .module('app.cards')
        .run(cardsRoute);

    cardsRoute.$inject = ['Router'];

    function cardsRoute(Router) {

        Router.state('app.cards', {
            url: '/cards',
            title: 'Cards',
            templateUrl: 'cards.html',
            require: ['angular-flot', 'easypiechart', 'sparkline']
        });
    }

})();
