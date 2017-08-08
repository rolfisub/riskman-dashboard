(function() {
    'use strict';

    angular
        .module('app.forms')
        .run(formsRoute);

    formsRoute.$inject = ['Router'];
    function formsRoute(Router){

        Router.state('app.forms', {
            url: '/forms',
            abstract: true,
            template: '<div ui-view class="ng-fadeInLeftShort"></div>'
        })
        .state('app.forms.material', {
            url: '/material',
            title: 'Material Inputs',
            templateUrl: 'material.html'
        })
        .state('app.forms.validation', {
            url: '/validation',
            title: 'Validation',
            templateUrl: 'validation.html',
            require: ['ui.select']
        })
        .state('app.forms.classic', {
            url: '/classic',
            title: 'Classic Inputs',
            templateUrl: 'forms.classic.html'
        })
        .state('app.forms.advanced', {
            url: '/advanced',
            title: 'Advanced',
            templateUrl: 'forms.advanced.html',
            require: ['ui.select', 'vr.directives.slider', 'colorpicker.module']
        })
        .state('app.forms.editor', {
            url: '/editor',
            title: 'Editors',
            templateUrl: 'editor.html',
            require: ['fontawesome', 'summernote']
        })
        .state('app.forms.upload', {
            url: '/upload',
            title: 'Forms Upload',
            templateUrl: 'upload.html',
            require: ['filestyle', 'angularFileUpload']
        })
        .state('app.forms.dropzone', {
            url: '/dropzone',
            title: 'Dropzone',
            templateUrl: 'dropzone.html',
            require: ['ngDropzone']
        })
        .state('app.forms.xeditable', {
            url: '/xeditable',
            title: 'Forms Xeditable',
            templateUrl: 'xeditable.form.html',
            require: ['xeditable']
        })
        ;
    }

})();
