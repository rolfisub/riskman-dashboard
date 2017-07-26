/**
 * Testing angular controller and route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

(function() {
    'use strict';
    angular
        .module("app.directives")
        .directive('editAdminPop', function(){
        return {
            restrict: 'E', //This means that it will be used as an element and NOT as an attribute.
            replace: true,
            scope: { username: '=' },
            templateUrl: "editAdminPop.html",
            controller: ['$scope', 'adminsSrv', 'adminEditValidate', function ($scope, adminsSrv, editValidator) {
                 $scope.dataEdit = {
                    email:'',
                    firstname:'',
                    lastname:'',
                    password:'',
                    passwordnew:'',
                    passwordnew2:'',
                    username:''
                };

                $scope.editAdminPop = {
                    title:'Edit Admin',
                    content:'Edit admin account information.',
                    hide: true
                };

                $scope.editDataStatus = {
                    email:{
                        msg:'',
                        valid:true
                    },
                    firstname:{
                        msg:'',
                        valid:true
                    },
                    lastname:{
                        msg:'',
                        valid:true
                    },
                    password:{
                        msg:'',
                        valid:true
                    },
                    passwordnew:{
                        msg:'',
                        valid:true
                    },
                    passwordnew2:{
                        msg:'',
                        valid:true
                    },

                };
                $scope.genericError = {
                    msg:'',
                    valid:true
                };
                $scope.editForm = {
                    isValid: true
                };

                $scope.validateEditField = function(field) {
                    $scope.editDataStatus = editValidator.validateObjectField(field, $scope.editDataStatus, $scope.dataEdit);
                    $scope.editForm.isValid = editValidator.isEditValid($scope.dataEdit);
                };
                
                $scope.reset = function(){
                    $scope.dataEdit.email = '';
                    $scope.dataEdit.firstname = '';
                    $scope.dataEdit.lastname = '';
                    $scope.dataEdit.password = '';
                    $scope.dataEdit.passwordnew = '';
                    $scope.dataEdit.passwordnew2 = '';
                    $scope.editDataStatus.email.valid = true;
                    $scope.editDataStatus.firstname.valid = true;
                    $scope.editDataStatus.lastname.valid = true;
                    $scope.editDataStatus.password.valid = true;
                    $scope.editDataStatus.passwordnew.valid = true;
                    $scope.editDataStatus.passwordnew2.valid = true;
                    $scope.genericError.valid = true;
                };
                
                $scope.getAdmin = function(){
                    $scope.reset();
                    var r = adminsSrv.getAdminByUsername($scope.username);
                    r.then(function(response){
                        $scope.dataEdit = angular.merge($scope.dataEdit, response.data);
                    },
                    function(error){
                        adminsSrv.errorCallBack(error);
                    });
                };

                $scope.editAdmin = function(){
                    adminsSrv.resetUpdateData();
                    adminsSrv.setUpdatePassword($scope.dataEdit.password);
                    adminsSrv.setUpdatePasswordNew($scope.dataEdit.passwordnew);
                    adminsSrv.setUpdatePasswordNew2($scope.dataEdit.passwordnew2);
                    adminsSrv.setUpdateEmail($scope.dataEdit.email);
                    adminsSrv.setUpdateFirstName($scope.dataEdit.firstname);
                    adminsSrv.setUpdateLastName($scope.dataEdit.lastname);
                    
                    var r = adminsSrv.updateAdmin($scope.dataEdit.username);
                    
                    r.then(function(res){
                        $scope.getAdmin();
                        $scope.$parent.init();
                        $scope.$parent.genericSuccessMsg.show = true;
                        $scope.$parent.genericSuccessMsg.msg = 'Admin Updated.';
                    }, function(err){
                        if(err.status === 400) {
                            $scope.$parent.genericSuccessMsg.show = false;
                            $scope.genericError.valid = false;
                            $scope.genericError.msg = err.data.feedback[0];
                        }
                        adminsSrv.errorCallBack(err);
                    });                   
                };
                
            }]
        };
    });
})();