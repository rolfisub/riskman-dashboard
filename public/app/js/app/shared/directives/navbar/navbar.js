/**
 * Testing angular controller and route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

define('navbar', ['admin'], function (admin) {
    admin.dp.directive('navBar', function () {
        return {
            restrict: 'E', //This means that it will be used as an element and NOT as an attribute.
            replace: true,
            transclude: true,
            templateUrl: "/app/js/app/shared/directives/navbar/navbar.html",
            controller: ['$scope', function ($scope) {
                   
            }]
        };
    });
});
