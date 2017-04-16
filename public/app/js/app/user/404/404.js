/**
 * Testing angular controller and route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

define('404',['admin'], function(admin){
    admin.cp.register('404',['$scope', function ($scope) {
        $scope.msg = 'This is the 404 controller';
    }]);
});
