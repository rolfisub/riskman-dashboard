(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('NestableController', NestableController);

    function NestableController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.items = [{
                item: {
                    text: 'Sherry Spencer'
                },
                children: []
            }, {
                item: {
                    text: 'Nathaniel Herrera'
                },
                children: [{
                    item: {
                        text: 'Violet Graves'
                    },
                    children: []
                }, {
                    item: {
                        text: 'Daniel Crawford'
                    },
                    children: []
                }]
            }];

            vm.add = function() {
                vm.items.push({
                    item: {
                        text: 'Darren Dean'
                    },
                    children: []
                });
            }
        }
    }
})();