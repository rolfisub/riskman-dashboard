(function() {
    'use strict';

    angular
        .module('app.floatbutton')
        .controller('FloatButtonController', FloatButtonController);

    FloatButtonController.$inject = ['$window'];

    function FloatButtonController($window) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.menuState = 'closed';
            vm.loc = loc;
            vm.mainAction = mainAction;
            vm.hovered = hovered;

            vm.chosen = {
                effect: 'zoomin',
                position: 'br',
                method: 'click',
                action: 'fire'
            };

            vm.buttons = [{
                label: 'View on Github',
                icon: 'ion-social-github',
                href: '//github.com/nobitagit/ng-material-floating-button/'
            }, {
                label: 'Follow me on Github',
                icon: 'ion-social-octocat',
                href: '//github.com/nobitagit'
            }, {
                label: 'Share on Twitter',
                icon: 'ion-social-twitter',
                href: '//twitter.com/share?text=Amazing material floating action button directive!&url=http://nobitagit.github.io/ng-material-floating-button/&hashtags=angular,material,design,button'
            }];

            function loc(href) {
                $window.location.href = href;
            }

            function mainAction() {
                console.log('Firing Main Action!');
            }

            function hovered() {
                // toggle something on hover.
            }

            vm.toggle = function() {
                this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
            };

            vm.closeMenu = function() {
                this.menuState = 'closed';
            };
        }
    }
})();
