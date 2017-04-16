/**
 * Testing angular controller and route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

define('header', ['admin', 'sidebar'], function (admin) {
    admin.dp.directive('dpHeader', function () {
        return {
            restrict: 'E', //This means that it will be used as an element and NOT as an attribute.
            replace: true,
            transclude: true,
            templateUrl: "/app/js/app/shared/directives/header/header.html",
            controller: ['$scope', function ($scope) {
                   
            }]
        };
    });
});
