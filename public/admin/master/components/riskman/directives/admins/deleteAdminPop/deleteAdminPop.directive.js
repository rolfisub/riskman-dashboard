/**
 * Testing angular controller and route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

(function() {
    'use strict';
    angular
        .module("riskman.directives")
        .directive('deleteAdminPop', function(){
        return {
            restrict: 'E', //This means that it will be used as an element and NOT as an attribute.
            replace: true,
            scope: { username: '=' },
            templateUrl: "app/views/deleteAdminPop.html",
            controller: ['$scope', 'admins', function ($scope, adminsSrv) {

                $scope.deladminPop = {
                    title:'Delete admin account',
                    content:'Are you sure that you want to delete this account?'
                };
                
                $scope.deleteAdmin = function() {
                    var r = adminsSrv.deleteAdmin($scope.username);
                    r.then(function(res){
                        //code 200
                        $scope.$parent.init();
                        $scope.$parent.genericErrorMsg.show = false;
                        $scope.$parent.genericSuccessMsg.msg = 'Admin deleted.';
                        $scope.$parent.genericSuccessMsg.show = true;
                    }, function(err){
                        //code 400 >
                        if(err.status === 400) {
                            $scope.$parent.genericErrorMsg.msg = err.data.feedback[0];
                            $scope.$parent.genericErrorMsg.show = true;
                            $scope.$parent.genericSuccessMsg.show = false;
                        } else {
                            adminsSrv.errorCallBack(err);
                        }

                    });
                };
                
                
            }]
        };
    });
})();