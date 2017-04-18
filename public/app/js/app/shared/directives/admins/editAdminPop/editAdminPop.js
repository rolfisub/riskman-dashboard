/**
 * Testing angular controller and route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

define('admins/editAdminPop',['admin'], function(admin){
    admin.dp.directive('editAdminPop', function(){
        return {
            restrict: 'E', //This means that it will be used as an element and NOT as an attribute.
            replace: true,
            scope: { username: '=' },
            templateUrl: "/app/js/app/shared/directives/admins/editAdminPop/editAdminPop.html",
            controller: ['$scope', 'adminsSrv', 'adminCreateValidate', function ($scope, adminsSrv, createValidator) {
                 $scope.dataEdit = {
                    password:'',
                    email:'',
                    firstname:'',
                    lastname:''
                };

                $scope.editAdminPop = {
                    title:'Edit Admin',
                    content:'Edit admin account information.',
                    hide: true
                };

                $scope.editDataStatus = {
                    password:{
                        msg:'',
                        valid:true
                    },
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
                    }

                };
                $scope.genericError = {
                    msg:'',
                    valid:true
                };
                $scope.successMsg = {
                    msg:'Admin created.',
                    show: false
                };
                $scope.editForm = {
                    isValid: true
                };

                $scope.validateEditField = function(field) {
                    $scope.editDataStatus = createValidator.validateObjectField(field, $scope.editDataStatus, $scope.dataEdit);
                    $scope.editForm.isValid = createValidator.isEditValid($scope.dataEdit);
                };
                
                $scope.reset = function(){
                    $scope.dataEdit.email = '';
                    $scope.dataEdit.firstname = '';
                    $scope.dataEdit.lastname = '';
                    $scope.dataEdit.password = '';
                    $scope.editDataStatus.email.valid = true;
                    $scope.editDataStatus.firstname.valid = true;
                    $scope.editDataStatus.lastname.valid = true;
                    $scope.editDataStatus.password.valid = true;
                    $scope.genericError.valid = true;
                };
                
                $scope.getAdmin = function(){
                    var r = adminsSrv.getAdminByUsername($scope.username);
                    r.then(function(response){
                        $scope.dataEdit = response.data;
                    },
                    function(error){
                        console.log(error);
                    });
                    
                };

                $scope.editAdmin = function(){
                    
                };
                
            }]
        };
    });
});