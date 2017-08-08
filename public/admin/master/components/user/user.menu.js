(function() {
    'use strict';

    angular
        .module('app.user')
        .run(userRun);

    userRun.$inject = ['Menu'];

    function userRun(Menu) {
        /*
        var menuItem = {
            name: 'User',
            sref: 'user',
            order: 9,
            iconclass: 'ion-person-stalker',
            imgpath: 'app/img/icons/person-stalker.svg',
            subitems: [{
                name: 'Login',
                sref: 'user.login'
            }, {
                name: 'Signup',
                sref: 'user.signup'
            }, {
                name: 'Lock',
                sref: 'user.lock'
            }, {
                name: 'Recover',
                sref: 'user.recover'
            }]
        };

        Menu.addItem(menuItem);*/

    }
})();
