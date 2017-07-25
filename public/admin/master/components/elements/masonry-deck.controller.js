(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('MasonryDeckController', MasonryDeckController)
        .directive('imageloaded', imageloaded); // required by demo

    MasonryDeckController.$inject = ['Router'];

    function MasonryDeckController(Router) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.viewpath = Router.viewpath;

            vm.photos = [
                {id: 'photo-1', name: 'Awesome photo', src: 'app/img/user/01.jpg'},
                {id: 'photo-2', name: 'Great photo', src: 'app/img/user/02.jpg'},
                {id: 'photo-3', name: 'Strange photo', src: 'app/img/user/06.jpg'},
                {id: 'photo-4', name: 'A photo?', src: 'app/img/user/03.jpg'},
                {id: 'photo-5', name: 'What a photo', src: 'app/img/user/04.jpg'},
                {id: 'photo-6', name: 'Silly photo', src: 'app/img/user/02.jpg'},
                {id: 'photo-7', name: 'Weird photo', src: 'app/img/user/01.jpg'},
                {id: 'photo-8', name: 'Modern photo', src: 'app/img/user/07.jpg'},
                {id: 'photo-9', name: 'Classical photo', src: 'app/img/user/06.jpg'},
                {id: 'photo-10', name: 'Dynamic photo', src: 'app/img/user/04.jpg'},
                {id: 'photo-11', name: 'Neat photo', src: 'app/img/user/03.jpg'},
                {id: 'photo-12', name: 'Bumpy photo', src: 'app/img/user/01.jpg'},
                {id: 'photo-13', name: 'Brilliant photo', src: 'app/img/user/05.jpg'},
                {id: 'photo-14', name: 'Excellent photo', src: 'app/img/user/04.jpg'},
                {id: 'photo-15', name: 'Gorgeous photo', src: 'app/img/user/07.jpg'}
            ];
        }
    }

    // Add class to img element when source is loaded
    function imageloaded() {
        // Copyright(c) 2013 André König <akoenig@posteo.de>
        // MIT Licensed
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var cssClass = attrs.loadedclass;

            element.bind('load', function() {
                angular.element(element).addClass(cssClass);
            });
        }
    }

})();
