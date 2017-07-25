(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('GMapFullController', GMapFullController);

    GMapFullController.$inject = ['uiGmapIsReady'];

    function GMapFullController(uiGmapIsReady) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.myMarkers = [
                {id: 0, name: 'Canada',        coords: {latitude: 56.130366, longitude: -106.346771 } },
                {id: 1, name: 'New York',      coords: {latitude: 40.712784, longitude: -74.005941 } },
                {id: 2, name: 'Toronto',       coords: {latitude: 43.653226, longitude: -79.383184 } },
                {id: 3, name: 'San Francisco', coords: {latitude: 37.774929, longitude: -122.419416 } },
                {id: 4, name: 'Utah',          coords: {latitude: 39.320980, longitude: -111.093731 } }
            ];
            vm.map = {
                zoom: 4,
                center: vm.myMarkers[4].coords
            };
            vm.mapOptions = {
                scrollwheel: false
            };

            // http://angular-ui.github.io/angular-google-maps/#!/api/IsReady
            uiGmapIsReady.promise(1).then(function(instances) {
                instances.forEach(function(inst) {
                    var map = inst.map;
                    // var uuid = map.uiGmap_id;
                    // var mapInstanceNumber = inst.instance; // Starts at 1.

                    vm.myMap = map;
                    angular.forEach(vm.myMarkers, function(pos, id) {
                        vm.myMarkers[id].position = new google.maps.Marker({
                            map: vm.myMap,
                            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
                        });
                    });

                });
            });

        }
    }
})();
