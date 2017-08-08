(function() {
    'use strict';

    angular
        .module('app.menu')
        .service('Menu', Menu);

    function Menu() {
        /* jshint validthis:true */
        this.addItem = addItem;
        this.getItems = getItems;

        ////////////////

        this.menu = [];

        function addItem(item) {
            validate(item);
            this.menu.push(item);
        }

        function getItems() {
            return this.menu;
        }

        // validate items and throw error when can't recover
        function validate(item) {
            if (!angular.isDefined(item))
                throw new Error('Menu item not defined.');
            if (!angular.isDefined(item.name))
                throw new Error('Menu item name not defined.');
            if (!angular.isDefined(item.order))
                item.order = 0; // order must exists
            // item ok
            return item;
        }

    }
})();
