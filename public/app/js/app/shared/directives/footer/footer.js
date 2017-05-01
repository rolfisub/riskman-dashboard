/**
 * Testing angular controller and route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

define('footer',['admin'], function(admin){
    admin.dp.directive('dpFooter', function(){
        return {
            restrict: 'E', //This means that it will be used as an element and NOT as an attribute.
            replace: true,
            // scope: { data: '=' },
            templateUrl: "/app/js/app/shared/directives/footer/footer.html",
            controller: ['$scope', function ($scope) {
                    var currentYear = new Date().getFullYear();
                
                    $scope.footerData = {
                        year: currentYear,
                        sitename: 'Riskman, Inc.' // TODO: This needs to come from the database, not hardcoded in here.
                    };
            }]
        };
    });
});