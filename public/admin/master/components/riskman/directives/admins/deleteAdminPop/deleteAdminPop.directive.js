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
                
                $scope.successMsg = {
                    msg:'Admin deleted',
                    show: false
                };
                
                $scope.errorMsg = {
                    msg:'',
                    show: false
                };
                
                $scope.deleteAdmin = function() {
                    var r = adminsSrv.deleteAdmin($scope.username);
                    r.then(function(res){
                        //code 200
                        $scope.$emit('initAdmins', {});
                        $scope.successMsg.show = true;
                    }, function(err){
                        //code 400 >
                        if(err.status === 400) {
                            $scope.errorMsg.msg = err.data.feedback[0];
                            $scope.errorMsg.show = true;
                            $scope.successMsg.show = false;
                        } else {
                            adminsSrv.errorCallBack(err);
                        }

                    });
                };
                
                
            }]
        };
    });
})();