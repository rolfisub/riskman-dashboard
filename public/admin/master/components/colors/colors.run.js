(function() {
    'use strict';

    angular
        .module('app.core')
        .run(colorsRun);

    colorsRun.$inject = ['$rootScope', 'Colors'];

    function colorsRun($rootScope, Colors) {

        // Allows to use branding color with interpolation
        // <tag attribute="{{ colorByName('primary') }}" />
        $rootScope.colorByName = Colors.byName;

    }

})();
