(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartRickshawController', ChartRickshawController);

    ChartRickshawController.$inject = ['Colors'];

    function ChartRickshawController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.renderers = [{
                id: 'area',
                name: 'Area'
            }, {
                id: 'line',
                name: 'Line'
            }, {
                id: 'bar',
                name: 'Bar'
            }, {
                id: 'scatterplot',
                name: 'Scatterplot'
            }];

            vm.palettes = [
                'spectrum14',
                'spectrum2000',
                'spectrum2001',
                'colorwheel',
                'cool',
                'classic9',
                'munin'
            ];

            vm.rendererChanged = function(id) {
                vm['options' + id] = {
                    renderer: vm['renderer' + id].id
                };
            };

            vm.paletteChanged = function(id) {
                vm['features' + id] = {
                    palette: vm['palette' + id]
                };
            };

            vm.changeSeriesData = function(id) {
                var seriesList = [];
                for (var i = 0; i < 3; i++) {
                    var series = {
                        name: 'Series ' + (i + 1),
                        data: []
                    };
                    for (var j = 0; j < 10; j++) {
                        series.data.push({
                            x: j,
                            y: Math.random() * 20
                        });
                    }
                    seriesList.push(series);
                    vm['series' + id][i] = series;
                }
                //vm['series' + id] = seriesList;
            };

            vm.series0 = [];

            vm.options0 = {
                renderer: 'area'
            };

            vm.renderer0 = vm.renderers[0];
            vm.palette0 = vm.palettes[0];

            vm.rendererChanged(0);
            vm.paletteChanged(0);
            vm.changeSeriesData(0);

            // Graph 2

            var seriesData = [
                [],
                [],
                []
            ];
            var random = new Rickshaw.Fixtures.RandomData(150);

            for (var i = 0; i < 150; i++) {
                random.addData(seriesData);
            }

            vm.series2 = [{
                color: Colors.byName('indigo-700'),
                data: seriesData[0],
                name: 'New York'
            }, {
                color: Colors.byName('primary'),
                data: seriesData[1],
                name: 'London'
            }, {
                color: Colors.byName('info'),
                data: seriesData[2],
                name: 'Tokyo'
            }];
            vm.options2 = {
                renderer: 'area'
            };

            vm.series3 = [{
                color: Colors.byName('green-700'),
                data: seriesData[0],
                name: 'New York'
            }, {
                color: Colors.byName('green-500'),
                data: seriesData[1],
                name: 'London'
            }, {
                color: Colors.byName('green-200'),
                data: seriesData[2],
                name: 'Tokyo'
            }];
            vm.options3 = {
                renderer: 'bar'
            };
            // Scatterplot


            var seriesData2 = [
                [],
                [],
                []
            ];
            var random2 = new Rickshaw.Fixtures.RandomData(150);

            for (var j = 0; j < 200; j++) {
                random2.addData(seriesData2);
            }
            vm.series4 = [{
                color: Colors.byName('pink-700'),
                data: seriesData2[0],
                name: 'New York'
            }, {
                color: Colors.byName('pink-500'),
                data: seriesData2[1],
                name: 'London'
            }, {
                color: Colors.byName('pink-200'),
                data: seriesData2[2],
                name: 'Tokyo'
            }];
            vm.options4 = {
                height: 170,
                renderer: 'scatterplot'
            };
            vm.features4 = {
                legend: {
                    toggle: true,
                    highlight: true
                },
                hover: {
                    xFormatter: function(x) {
                        return 't=' + x;
                    },
                    yFormatter: function(y) {
                        return '$' + y;
                    }
                }
            };

        }
    }
})();
