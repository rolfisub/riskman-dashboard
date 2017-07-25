(function() {
    'use strict';

    angular
        .module('app.tables')
        .run(tablesRoute);

    tablesRoute.$inject = ['Router'];
    function tablesRoute(Router){

        Router.state('app.tables', {
            url: '/tables',
            title: 'Tables',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.tables.classic', {
            url: '/classic',
            title: 'Tables Classic',
            templateUrl: 'tables.classic.html'
        })
        .state('app.tables.datatable', {
            url: '/data',
            title: 'Tables Data',
            templateUrl: 'datatable.html',
            require: ['datatables']
        })
        .state('app.tables.ngtable', {
            url: '/ngtable',
            title: 'ngTable',
            templateUrl: 'ngtable.html',
            require: ['ngTable', 'ngTableExport']
        })
        .state('app.tables.xeditable', {
            url: '/xeditable',
            title: 'Tables Xeditable',
            templateUrl: 'xeditable.table.html',
            require: ['xeditable']
        })
        ;
    }

})();
