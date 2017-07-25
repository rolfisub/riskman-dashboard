(function() {
    'use strict';

    angular
        .module('app.menu')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['Menu'];

    function MenuController(Menu) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.items = Menu.getItems();
        }
    }
})();
