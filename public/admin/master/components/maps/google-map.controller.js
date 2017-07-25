(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('GMapController', GMapController);

    GMapController.$inject = ['$scope', '$timeout', 'uiGmapGoogleMapApi'];

    function GMapController($scope, $timeout, uiGmapGoogleMapApi) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Basic map
            vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

            // Markers

            vm.map1 = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
            vm.options = {scrollwheel: false};
            vm.coordsUpdates = 0;
            vm.dynamicMoveCtr = 0;
            vm.marker = {
              id: 0,
              coords: {
                latitude: 40.1451,
                longitude: -99.6680
              },
              options: { draggable: true },
              events: {
                dragend: function (/*marker, eventName, args*/) {
                  // var lat = marker.getPosition().lat();
                  // var lon = marker.getPosition().lng();

                  vm.marker.options = {
                    draggable: true,
                    labelContent: 'lat: ' + vm.marker.coords.latitude + ' ' + 'lon: ' + vm.marker.coords.longitude,
                    labelAnchor: '100 0',
                    labelClass: 'marker-labels'
                  };
                }
              }
            };
            var $offWatch = $scope.$watchCollection('marker.coords', function (newVal, oldVal) {
              if (_.isEqual(newVal, oldVal))
                return;
              vm.coordsUpdates++;
            });
            $timeout(function () {
              vm.marker.coords = {
                latitude: 42.1451,
                longitude: -100.6680
              };
              vm.dynamicMoveCtr++;
              $timeout(function () {
                vm.marker.coords = {
                  latitude: 43.1451,
                  longitude: -102.6680
                };
                vm.dynamicMoveCtr++;
              }, 2000);
            }, 1000);

            // uiGmapGoogleMapApi is a promise.
            // The 'then' callback function provides the google.maps object.
            // uiGmapGoogleMapApi.then(function(/*maps*/) {

            // });

            $scope.$on('$destroy', $offWatch);
        }
    }
})();
