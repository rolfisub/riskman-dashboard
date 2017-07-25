(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('MessagesController', MessagesController)
        .controller('MessageViewModalController', MessageViewModalController)
        .controller('MessageNewModalController', MessageNewModalController);

    MessagesController.$inject = ['$uibModal'];

    function MessagesController($uibModal) {
        var vm = this;


        activate();

        ////////////////

        function activate() {

            vm.display = function() {

                var modalBarInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/views/messages.view.tpl.html',
                    controller: 'MessageViewModalController as mod',
                    // position via css class
                    windowClass: 'modal-right modal-auto-size',
                    backdropClass: '',
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

            vm.compose = function() {

                var modalBarInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/views/messages.new.tpl.html',
                    controller: 'MessageNewModalController as mod',
                    // position via css class
                    // windowClass: 'modal-right modal-auto-size',
                    // backdropClass: '',
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

    MessageNewModalController.$inject = ['$uibModalInstance', 'data'];

    function MessageNewModalController($uibModalInstance, data) {
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

    MessageViewModalController.$inject = ['$uibModalInstance', 'data'];

    function MessageViewModalController($uibModalInstance, data) {
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

})();
