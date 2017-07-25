(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('VectorMapController', VectorMapController);

    VectorMapController.$inject = ['Colors'];

    function VectorMapController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.options = {
                map: 'world_mill_en',
                normalizeFunction: 'polynomial',
                backgroundColor: '#fff',
                regionsSelectable: true,
                markersSelectable: true,
                regionStyle: {
                    initial: {
                        fill: Colors.byName('gray-lighter')
                    },
                    hover: {
                        fill: Colors.byName('indigo-500'),
                        stroke: '#fff'
                    },
                },
                markerStyle: {
                    initial: {
                        fill: Colors.byName('pink-500'),
                        stroke: '#fff',
                        r: 10
                    },
                    hover: {
                        fill: Colors.byName('amber-500'),
                        stroke: '#fff'
                    }
                }
            };

            vm.series = {

            };

            vm.world_markers = [
                {'latLng': [47.14, 9.52],    'name': 'Liechtenstein'},
                {'latLng': [7.11, 171.06],   'name': 'Marshall Islands'},
                {'latLng': [17.3, -62.73],   'name': 'Saint Kitts and Nevis'},
                {'latLng': [3.2, 73.22],     'name': 'Maldives'},
                {'latLng': [35.88, 14.5],    'name': 'Malta'},
                {'latLng': [12.05, -61.75],  'name': 'Grenada'},
                {'latLng': [13.16, -61.23],  'name': 'Saint Vincent and the Grenadines'},
                {'latLng': [13.16, -59.55],  'name': 'Barbados'},
                {'latLng': [17.11, -61.85],  'name': 'Antigua and Barbuda'},
                {'latLng': [-4.61, 55.45],   'name': 'Seychelles'},
                {'latLng': [7.35, 134.46],   'name': 'Palau'},
                {'latLng': [42.5, 1.51],     'name': 'Andorra'}
            ];
            vm.other_markers = [
                {'latLng': [56.13, -106.34], 'name': 'Canada', style: {fill: Colors.byName('info')}},
                {'latLng': [40.71, -74.00],  'name': 'New York', style: {fill: Colors.byName('info')}},
                {'latLng': [43.65, -79.38],  'name': 'Toronto', style: {fill: Colors.byName('info')}},
                {'latLng': [37.77, -122.41], 'name': 'San Francisco', style: {fill: Colors.byName('info')}},
                {'latLng': [39.32, -111.09], 'name': 'Utah', style: {fill: Colors.byName('info')}},
                {'latLng': [41.9, 12.45],    'name': 'Vatican City', style: {fill: Colors.byName('info')}},
                {'latLng': [43.93, 12.46],   'name': 'San Marino', style: {fill: Colors.byName('info')}}
            ];

            vm.showAllMarkers = false;
            vm.markers = vm.world_markers;

            vm.displayAllMarkers = displayAllMarkers;

            function displayAllMarkers(show) {

                if (show) vm.markers = vm.world_markers.concat(vm.other_markers);
                else vm.markers = vm.world_markers;

            }

            // USA Map

            vm.usa_markers = [{
                latLng: [40.71, -74.00],
                name: 'New York'
            }, {
                latLng: [34.05, -118.24],
                name: 'Los Angeles'
            }, {
                latLng: [41.87, -87.62],
                name: 'Chicago'
            }, {
                latLng: [29.76, -95.36],
                name: 'Houston'
            }, {
                latLng: [39.95, -75.16],
                name: 'Philadelphia'
            }, {
                latLng: [38.90, -77.03],
                name: 'Washington'
            }, {
                latLng: [37.36, -122.03],
                name: 'Silicon Valley',
                style: {
                    fill: Colors.byName('green-500'),
                    r: 20
                }
            }];

            vm.usa_options = {
                map: 'us_mill_en',
                normalizeFunction: 'polynomial',
                backgroundColor: '#fff',
                regionsSelectable: true,
                markersSelectable: true,
                regionStyle: {
                    initial: {
                        fill: Colors.byName('deepPurple-400')
                    },
                    hover: {
                        fill: Colors.byName('deepPurple-100'),
                        stroke: '#fff'
                    },
                },
                markerStyle: {
                    initial: {
                        fill: Colors.byName('amber-500'),
                        stroke: '#fff',
                        r: 10
                    },
                    hover: {
                        fill: Colors.byName('orange-500'),
                        stroke: '#fff'
                    }
                }
            };
        }
    }
})();
