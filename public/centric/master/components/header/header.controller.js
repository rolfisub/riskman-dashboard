(function() {
    'use strict';

    angular
        .module('app.header')
        .controller('HeaderController', HeaderController)
        .controller('HeaderModalController', HeaderModalController)
        .controller('HeaderModalSearchController', HeaderModalSearchController);

    HeaderController.$inject = ['$uibModal'];

    function HeaderController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            // Header Search
            vm.openModalSearch = function() {

                var modalSearchInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/views/header-search.tpl.html',
                    controller: 'HeaderModalSearchController as mod',
                    // position via css class
                    windowClass: 'modal-top',
                    backdropClass: 'modal-backdrop-soft',
                    // sent data to the modal instance (injectable into controller)
                    resolve: {
                        data: function() {
                            return {
                                title: 'Search'
                            };
                        }
                    }
                });

                modalSearchInstance.result.then(function( /*data*/ ) {
                    // use data from modal here
                }, function() {
                    // Modal dismissed
                });
            };

            // Settings panel (right sidebar)
            vm.openModalBar = function() {

                var modalBarInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/views/settings.tpl.html',
                    controller: 'HeaderModalController as mod',
                    // position via css class
                    windowClass: 'modal-right',
                    backdropClass: 'modal-backdrop-soft',
                    // sent data to the modal instance (injectable into controller)
                    resolve: {
                        data: function() {
                            return {
                                title: 'Settings'
                            };
                        }
                    }
                });

                modalBarInstance.result.then(function( /*data*/ ) {
                    // use data from modal here
                }, function() {
                    // Modal dismissed
                });
            };

        }
    }

    HeaderModalController.$inject = ['$uibModalInstance', 'data'];

    function HeaderModalController($uibModalInstance, data) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.modalTitle = data.title;

            vm.close = function() {
                $uibModalInstance.close( /* data for promise*/ );
            };

            vm.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }
    HeaderModalSearchController.$inject = ['$uibModalInstance', '$timeout', 'data'];

    function HeaderModalSearchController($uibModalInstance, $timeout, data) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.modalTitle = data.title;

            // input autofocus
            $timeout(function() {
                document.querySelector('.header-input-search').focus();
            }, 300);

            vm.close = function() {
                $uibModalInstance.close( /* data for promise*/ );
            };

            vm.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }

})();
