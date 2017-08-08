(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('DataTableController', DataTableController);

    DataTableController.$inject = ['$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'DTDefaultOptions'];

    function DataTableController($resource, DTOptionsBuilder, DTColumnDefBuilder, DTDefaultOptions) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            // Override the Bootstrap default options
            DTDefaultOptions.setBootstrapOptions({
                pagination: {
                    classes: {
                        ul: 'pagination pagination-rounded'
                    }
                }
            });

            vm.dtOptionsBs = DTOptionsBuilder
                .newOptions()
                .withPaginationType('full_numbers')
                .withDisplayLength(2)
                // Add Bootstrap compatibility
                .withBootstrap()
                .withLanguage({
                    sSearch: '<em class="ion-search"></em>',
                    oPaginate: {
                        sFirst: '<em class="ion-arrow-left-b"></em>',
                        sLast: '<em class="ion-arrow-right-b"></em>',
                        sNext: '<em class="ion-ios-arrow-right"></em>',
                        sPrevious: '<em class="ion-ios-arrow-left"></em>'
                    }
                })
                ;

            // Dynamic
            vm.dtOptions = DTOptionsBuilder
                .newOptions()
                .withPaginationType('numbers')
                .withDisplayLength(5)
                .withBootstrap()
                .withLanguage({
                    sSearch: '<em class="ion-search"></em>',
                    oPaginate: {
                        sFirst: '<em class="ion-arrow-left-b"></em>',
                        sLast: '<em class="ion-arrow-right-b"></em>',
                        sNext: '<em class="ion-ios-arrow-right"></em>',
                        sPrevious: '<em class="ion-ios-arrow-left"></em>'
                    }
                })
                ;
            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0),
                DTColumnDefBuilder.newColumnDef(1),
                DTColumnDefBuilder.newColumnDef(2),
                DTColumnDefBuilder.newColumnDef(3).notSortable()
            ];

            $resource('server/datatable.json').query().$promise.then(function(persons) {
                vm.persons = persons;
            });

            // Change data

            vm.heroes = [{
                'id': 860,
                'firstName': 'Superman',
                'lastName': 'Yoda'
            }, {
                'id': 870,
                'firstName': 'Ace',
                'lastName': 'Ventura'
            }, {
                'id': 590,
                'firstName': 'Flash',
                'lastName': 'Gordon'
            }, {
                'id': 870,
                'firstName': 'Ace',
                'lastName': 'Ventura'
            }, {
                'id': 590,
                'firstName': 'Flash',
                'lastName': 'Gordon'
            }, {
                'id': 803,
                'firstName': 'Luke',
                'lastName': 'Skywalker'
            }];

            vm.person2Add = _buildPerson2Add(1);
            vm.addPerson = addPerson;
            vm.modifyPerson = modifyPerson;
            vm.removePerson = removePerson;

            function _buildPerson2Add(id) {
                return {
                    id: id,
                    firstName: 'Foo' + id,
                    lastName: 'Bar' + id
                };
            }

            function addPerson() {
                vm.heroes.push(angular.copy(vm.person2Add));
                vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
            }

            function modifyPerson(index) {
                vm.heroes.splice(index, 1, angular.copy(vm.person2Add));
                vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
            }

            function removePerson(index) {
                vm.heroes.splice(index, 1);
            }

        }
    }
})();
