(function() {
    'use strict';

    angular
        .module('app.layouts')
        .controller('TabsDeepController', TabsDeepController);

    TabsDeepController.$inject = ['$rootScope', '$state'];
    function TabsDeepController($rootScope, $state) {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            vm.tabs = [
                { heading: 'Home', route:'app.layouts.tabs.home', active:false },
                { heading: 'Profile', route:'app.layouts.tabs.profile', active:false },
                { heading: 'Messages', route:'app.layouts.tabs.messages', active:false },
            ];

            vm.go = function(route){
                $state.go(route);
            };

            $rootScope.$on('$stateChangeSuccess', tabActive);
            tabActive();

            function tabActive() {
                vm.tabs.forEach(function(tab, id) {
                    vm.tabs[id].active = $state.is(tab.route);
                });
            }
        }
    }
})();
