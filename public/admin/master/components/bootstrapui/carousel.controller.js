(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    function CarouselDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.myInterval = 5000;
            vm.noWrapSlides = false;
            vm.active = 0;
            var slides = vm.slides = [];
            var currIndex = 0;

            vm.addSlide = function(id) {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: 'app/img/pic' + (id || 5) + '.jpg',
                    text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 2] + ' ' +
                        ['Trees', 'Mountains', 'Clouds', 'Space'][slides.length % 2],
                    id: currIndex++
                });
            };

            for (var i = 0; i < 4; i++) {
                vm.addSlide(i + 1);
            }

        }
    }
})();