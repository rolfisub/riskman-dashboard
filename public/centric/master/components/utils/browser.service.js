(function() {
    'use strict';
    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];

    // Browser detection
    function Browser($window) {
        return $window.jQBrowser;
    }

})();