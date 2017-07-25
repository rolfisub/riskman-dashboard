(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('RadialChartsController', RadialChartsController);

    /*jshint -W069*/
    RadialChartsController.$inject = ['Colors'];

    function RadialChartsController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // KNOB Charts

            vm.knobLoaderData1 = 80;
            vm.knobLoaderOptions1 = {
                width: '50%', // responsive
                displayInput: true,
                thickness: 0.1,
                fgColor: Colors.byName('info'),
                bgColor: 'rgba(162,162,162, .09)'
            };

            vm.knobLoaderData2 = 45;
            vm.knobLoaderOptions2 = {
                width: '50%', // responsive
                displayInput: true,
                thickness: 1,
                inputColor: '#fff',
                fgColor: Colors.byName('deepPurple-500'),
                bgColor: Colors.byName('green-500'),
                readOnly: true
            };

            vm.knobLoaderData3 = 30;
            vm.knobLoaderOptions3 = {
                width: '50%', // responsive
                displayInput: true,
                fgColor: Colors.byName('pink-500'),
                bgColor: 'rgba(162,162,162, .09)',
                displayPrevious: true,
                thickness: 0.1,
                lineCap: 'round'
            };

            vm.knobLoaderData4 = 20;
            vm.knobLoaderOptions4 = {
                width: '50%', // responsive
                displayInput: true,
                fgColor: Colors.byName('info'),
                bgColor: 'rgba(162,162,162, .09)',
                angleOffset: -125,
                angleArc: 250
            };

            // Easy Pie Charts

            vm.piePercent1 = 85;
            vm.piePercent2 = 45;
            vm.piePercent3 = 25;
            vm.piePercent4 = 60;

            vm.pieOptions1 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('success'),
                trackColor: false,
                scaleColor: false,
                lineWidth: 10,
                lineCap: 'circle'
            };

            vm.pieOptions2 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('warning'),
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                lineCap: 'circle'
            };

            vm.pieOptions3 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('danger'),
                trackColor: false,
                scaleColor: Colors.byName('gray'),
                lineWidth: 15,
                lineCap: 'circle'
            };

            vm.pieOptions4 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('danger'),
                trackColor: 'rgba(162,162,162, .09)',
                scaleColor: Colors.byName('gray-dark'),
                lineWidth: 15,
                lineCap: 'circle'
            };

            vm.randomize = function(type) {
                if (type === 'easy') {
                    vm.piePercent1 = random();
                    vm.piePercent2 = random();
                    vm.piePercent3 = random();
                    vm.piePercent4 = random();
                }
                if (type === 'knob') {
                    vm.knobLoaderData1 = random();
                    vm.knobLoaderData2 = random();
                    vm.knobLoaderData3 = random();
                    vm.knobLoaderData4 = random();
                }
            };

            function random() {
                return Math.floor((Math.random() * 100) + 1);
            }

        }
    }
})();
