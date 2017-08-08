(function() {
    'use strict';

    angular
        .module('app.elements')
        .run(elementsRoute);

    elementsRoute.$inject = ['Router'];

    function elementsRoute(Router) {

        Router.state('app.elements', {
                url: '/ui',
                abstract: true,
                template: '<div ui-view class="ng-fadeInLeftShort"></div>'
            })
            .state('app.elements.colors', {
                url: '/colors',
                title: 'UI Colors',
                templateUrl: 'colors.html'
            })
            .state('app.elements.whiteframes', {
                url: '/whiteframes',
                title: 'Whiteframes',
                templateUrl: 'whiteframes.html'
            })
            .state('app.elements.lists', {
                url: '/lists',
                title: 'Lists',
                templateUrl: 'lists.html'
            })
            .state('app.elements.bootstrapui', {
                url: '/bootstrapui',
                title: 'Bootstrapui',
                templateUrl: 'bootstrapui.html'
            })
            .state('app.elements.buttons', {
                url: '/buttons',
                title: 'Buttons',
                templateUrl: 'buttons.html'
            })
            .state('app.elements.sweet-alert', {
                url: '/sweet-alert',
                title: 'Sweet-alert',
                templateUrl: 'sweetalert.html',
                require: ['oitozero.ngSweetAlert']
            })
            .state('app.elements.spinners', {
                url: '/spinners',
                title: 'Spinners',
                templateUrl: 'spinners.html',
                require: ['the-cormoran.angular-loaders']
            })
            .state('app.elements.navtree', {
                url: '/navtree',
                title: 'Navtree',
                templateUrl: 'navtree.html',
                require: ['angularBootstrapNavTree']
            })
            .state('app.elements.nestable', {
                url: '/nestable',
                title: 'Nestable',
                templateUrl: 'nestable.html',
                require: ['ng-nestable']
            })
            .state('app.elements.grid', {
                url: '/grid',
                title: 'Grid',
                templateUrl: 'grid.html'
            })
            .state('app.elements.grid-masonry-deck', {
                url: '/grid-masonry-deck',
                title: 'Grid Masonry',
                templateUrl: 'grid-masonry-deck.html',
                require: ['akoenig.deckgrid']
            })
            .state('app.elements.typography', {
                url: '/typography',
                title: 'Typography',
                templateUrl: 'typography.html'
            })
            .state('app.elements.icons', {
                url: '/icons',
                title: 'Icons',
                templateUrl: 'icons.html'
            })
            .state('app.elements.utilities', {
                url: '/utilities',
                title: 'Utilities',
                templateUrl: 'utilities.html'
            });
    }

})();
