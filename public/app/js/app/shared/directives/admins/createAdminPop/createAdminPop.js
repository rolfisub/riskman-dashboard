/**
 * Testing angular controller and route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

define('admins/createAdminPop',['admin'], function(admin){
    admin.dp.directive('createAdminPop', function(){
        return {
            restrict: 'E', //This means that it will be used as an element and NOT as an attribute.
            replace: true,
            // scope: { data: '=' },
            templateUrl: "/app/js/app/shared/directives/admins/createAdminPop/createAdminPop.html",
            controller: ['$scope', 'adminsSrv', 'adminCreateValidate', function ($scope, adminsSrv, createValidator) {
                 $scope.dataCreate = {
                    username:'',
                    password:'',
                    password2:'',
                    email:'',
                    firstname:'',
                    lastname:''
                };

                $scope.newadminPop = {
                    title:'Create New Administrator',
                    content:'Please fill out the following form <br>to create a new administrator',
                    hide: true
                };

                $scope.createDataStatus = {
                    username:{
                        msg:'',
                        valid: true
                    },
                    password:{
                        msg:'',
                        valid:true
                    },
                    password2:{
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
                $scope.createForm = {
                    isValid : false
                };
                $scope.genericError = {
                    msg:'',
                    valid:true
                };
                $scope.successMsg = {
                    msg:'Admin created.',
                    show: false
                };

                $scope.validateCreateField = function(field) {
                    $scope.createDataStatus = createValidator.validateObjectField(field, $scope.createDataStatus, $scope.dataCreate);
                    $scope.createForm.isValid = createValidator.isFormValid($scope.dataCreate);
                };
                
                $scope.reset = function(){
                    $scope.dataCreate.email = '';
                    $scope.dataCreate.firstname = '';
                    $scope.dataCreate.lastname = '';
                    $scope.dataCreate.password = '';
                    $scope.dataCreate.password2 = '';
                    $scope.dataCreate.username = '';
                    $scope.createDataStatus.email.valid = true;
                    $scope.createDataStatus.firstname.valid = true;
                    $scope.createDataStatus.lastname.valid = true;
                    $scope.createDataStatus.password.valid = true;
                    $scope.createDataStatus.password2.valid = true;
                    $scope.createDataStatus.username.valid = true;
                    $scope.genericError.valid = true;
                };

                $scope.createAdmin = function(){
                    adminsSrv.resetCreateData();
                    adminsSrv.setUserName($scope.dataCreate.username);
                    adminsSrv.setPassword($scope.dataCreate.password);
                    adminsSrv.setEmail($scope.dataCreate.email);
                    adminsSrv.setFirstName($scope.dataCreate.firstname);
                    adminsSrv.setLastName($scope.dataCreate.lastname);

                    var r = adminsSrv.createAdmin();
                    r.then(function(res){
                        $scope.genericError.msg = '';
                        $scope.genericError.valid = true;
                        $scope.reset();
                        $scope.successMsg.show = true;
                        $scope.$parent.init();
                    }, function(err) {
                        if(err.status === 400) {
                            $scope.genericError.msg = err.data.feedback[0];
                            $scope.genericError.valid = false;
                            $scope.successMsg.show = false;
                        } else {
                            adminsSrv.errorCallBack(err);
                        }
                    });
                };
            }]
        };
    });
});