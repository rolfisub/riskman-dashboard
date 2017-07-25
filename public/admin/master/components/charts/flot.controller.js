(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('FlotChartController', FlotChartController);

    FlotChartController.$inject = ['$scope', 'ChartData', '$timeout', 'Colors'];

    function FlotChartController($scope, ChartData, $timeout, Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // BAR
            // -----------------------------------
            vm.barData = ChartData.load('server/chart/bar.json');
            vm.barOptions = {
                series: {
                    bars: {
                        align: 'center',
                        lineWidth: 0,
                        show: true,
                        barWidth: 0.6,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.8
                            }, {
                                opacity: 0.5
                            }]
                        }
                    }
                },
                grid: {
                    borderColor: 'rgba(162,162,162,.26)',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    mode: 'categories'
                },
                yaxis: {
                    position: ($scope.app.layout.rtl ? 'right' : 'left'),
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') }
                },
                shadowSize: 0
            };

            // BAR STACKED
            // -----------------------------------
            vm.barStackeData = ChartData.load('server/chart/barstacked.json');
            vm.barStackedOptions = {
                series: {
                    stack: true,
                    bars: {
                        align: 'center',
                        lineWidth: 0,
                        show: true,
                        barWidth: 0.6,
                        fill: 0.9
                    }
                },
                grid: {
                    borderColor: 'rgba(162,162,162,.26)',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 200, // optional: use it for a clear represetation
                    position: ($scope.app.layout.rtl ? 'right' : 'left'),
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') }
                },
                shadowSize: 0
            };

            // SPLINE
            // -----------------------------------
            vm.splineData = ChartData.load('server/chart/spline.json');
            vm.splineOptions = {
                series: {
                    lines: {
                        show: false
                    },
                    points: {
                        show: true,
                        radius: 2
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 1,
                        fill: 1
                    }
                },
                grid: {
                    borderColor: 'rgba(162,162,162,.26)',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 150, // optional: use it for a clear represetation
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    position: ($scope.app.layout.rtl ? 'right' : 'left'),
                    tickFormatter: function(v) {
                        return v /* + ' visitors'*/ ;
                    }
                },
                shadowSize: 0
            };

            // AREA
            // -----------------------------------
            vm.areaData = ChartData.load('server/chart/area.json');
            vm.areaOptions = {
                series: {
                    lines: {
                        show: true,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.5
                            }, {
                                opacity: 0.9
                            }]
                        }
                    },
                    points: {
                        show: false
                    }
                },
                grid: {
                    borderColor: 'rgba(162,162,162,.26)',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 150,
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    position: ($scope.app.layout.rtl ? 'right' : 'left')
                },
                shadowSize: 0
            };

            // LINE
            // -----------------------------------
            vm.lineData = ChartData.load('server/chart/line.json');
            vm.lineOptions = {
                series: {
                    lines: {
                        show: true,
                        fill: 0.01
                    },
                    points: {
                        show: true,
                        radius: 4
                    }
                },
                grid: {
                    borderColor: 'rgba(162,162,162,.26)',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: 'transparent'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') },
                    mode: 'categories'
                },
                yaxis: {
                    position: ($scope.app.layout.rtl ? 'right' : 'left'),
                    tickColor: 'rgba(162,162,162,.26)',
                    font: { color: Colors.byName('blueGrey-200') }
                },
                shadowSize: 0
            };

            // PIE
            // -----------------------------------
            vm.pieData = [{
                'label': 'CSS',
                'color': '#009688',
                'data': 40
            }, {
                'label': 'LESS',
                'color': '#FFC107',
                'data': 90
            }, {
                'label': 'SASS',
                'color': '#FF7043',
                'data': 75
            }];
            vm.pieOptions = {
                series: {
                    pie: {
                        show: true,
                        innerRadius: 0,
                        label: {
                            show: true,
                            radius: 0.8,
                            formatter: function(label, series) {
                                return '<div class="flot-pie-label">' +
                                    //label + ' : ' +
                                    Math.round(series.percent) +
                                    '%</div>';
                            },
                            background: {
                                opacity: 0.8,
                                color: '#222'
                            }
                        }
                    }
                }
            };

            // DONUT
            // -----------------------------------
            vm.donutData = [{
                'color': '#4CAF50',
                'data': 60,
                'label': 'Coffee'
            }, {
                'color': '#009688',
                'data': 90,
                'label': 'CSS'
            }, {
                'color': '#FFC107',
                'data': 50,
                'label': 'LESS'
            }, {
                'color': '#FF7043',
                'data': 80,
                'label': 'Jade'
            }, {
                'color': '#3949AB',
                'data': 116,
                'label': 'AngularJS'
            }];
            vm.donutOptions = {
                series: {
                    pie: {
                        show: true,
                        innerRadius: 0.5 // This makes the donut shape
                    }
                }
            };

            // REALTIME
            // -----------------------------------
            vm.realTimeOptions = {
                series: {
                    lines: {
                        show: true,
                        fill: true,
                        fillColor: {
                            colors: ['#3F51B5', '#3F51B5']
                        }
                    },
                    shadowSize: 0 // Drawing is faster without shadows
                },
                grid: {
                    show: false,
                    borderWidth: 0,
                    minBorderMargin: 20,
                    labelMargin: 10
                },
                xaxis: {
                    tickFormatter: function() {
                        return '';
                    }
                },
                yaxis: {
                    min: 0,
                    max: 110
                },
                legend: {
                    show: true
                },
                colors: ['#3F51B5']
            };

            // Generate random data for realtime demo
            var data = [],
                totalPoints = 300;

            update();

            function getRandomData() {
                if (data.length > 0)
                    data = data.slice(1);
                // Do a random walk
                while (data.length < totalPoints) {
                    var prev = data.length > 0 ? data[data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;
                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }
                    data.push(y);
                }
                // Zip the generated y values with the x values
                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push([i, data[i]]);
                }
                return [res];
            }

            function update() {
                vm.realTimeData = getRandomData();
                $timeout(update, 30);
            }
            // end random data generation

        }
    }
})();
