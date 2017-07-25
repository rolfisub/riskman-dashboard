(function() {
    'use strict';

    angular
        .module('app.forms')
        .run(formsRun);
    formsRun.$inject = ['Menu'];

    function formsRun(Menu) {

        var menuItem = {
            name: 'Forms',
            sref: 'app.forms',
            // iconclass: 'ion-clipboard',
            imgpath: 'app/img/icons/clipboard.svg',
            order: 4,
            subitems: [{
                name: 'Classic',
                sref: 'app.forms.classic'
            }, {
                name: 'Validation',
                sref: 'app.forms.validation'
            }, {
                name: 'Advanced',
                sref: 'app.forms.advanced'
            }, {
                name: 'Material',
                sref: 'app.forms.material'
            }, {
                name: 'Editors',
                sref: 'app.forms.editor'
            }, {
                name: 'Upload',
                sref: 'app.forms.upload'
            }, {
                name: 'Dropzone',
                sref: 'app.forms.dropzone'
            }, {
                name: 'xEditable',
                sref: 'app.forms.xeditable'
            }]
        };

        Menu.addItem(menuItem);

    }
})();