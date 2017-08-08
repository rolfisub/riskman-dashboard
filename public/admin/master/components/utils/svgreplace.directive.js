(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('svgReplace', svgReplace);

    svgReplace.$inject = ['$compile', '$http', '$templateCache', '$timeout']
    function svgReplace ($compile, $http, $templateCache, $timeout) {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            $timeout(function() {

                var src = attrs.src;

                if( !src || src.indexOf('.svg') < 0)
                    throw "only support for SVG images";
                    // return /*only support for SVG images*/;

                $http.get(src, {
                    cache : $templateCache
                }).success(function (res) {
                    element.replaceWith($compile(res)(scope))
                })

            });
        }
    }

})();
