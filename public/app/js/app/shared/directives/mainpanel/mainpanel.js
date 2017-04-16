/**
 * Testing angular controller and route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

define('mainpanel', ['admin', 'navbar'], function (admin) {
    admin.dp.directive('mainPanel', function () {
        return {
            restrict: 'E', //This means that it will be used as an element and NOT as an attribute.
            replace: true,
            transclude: true,
            templateUrl: "/app/js/app/shared/directives/mainpanel/mainpanel.html",
            controller: ['$scope', function ($scope) {
                   
            }]
        };
    });
});
