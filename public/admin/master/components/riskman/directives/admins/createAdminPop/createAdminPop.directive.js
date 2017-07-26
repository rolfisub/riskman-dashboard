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
        .directive('createAdminPop', function(){
        return {
            restrict: 'E', //This means that it will be used as an element and NOT as an attribute.
            replace: true,
            // scope: { data: '=' },
            templateUrl: "app/views/createAdminPop.html",
            //template:'<button type="button" class="btn btn-raised btn-success ripple m-sm" title="{{newadminPop.title}}"     data-content="{{newadminPop.content}}"     data-template-url="../views/createAdminPopTemplate.html"     data-animation="am-flip-x"                 data-auto-close="1"                 data-placement="bottom-left"                data-on-show="reset()"                bs-popover    >    <span class="ion-android-person-add"></span></button>',
            controller: ['$scope', 'admins', 'adminCreateValidate', function ($scope, adminsSrv, createValidator) {
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
                    $scope.createForm.isValid = createValidator.isCreateValid($scope.dataCreate);
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
                    adminsSrv.setCreateUserName($scope.dataCreate.username);
                    adminsSrv.setCreatePassword($scope.dataCreate.password);
                    adminsSrv.setCreateEmail($scope.dataCreate.email);
                    adminsSrv.setCreateFirstName($scope.dataCreate.firstname);
                    adminsSrv.setCreateLastName($scope.dataCreate.lastname);

                    var r = adminsSrv.createAdmin();
                    r.then(function(res){
                        $scope.genericError.msg = '';
                        $scope.genericError.valid = true;
                        $scope.reset();
                        $scope.successMsg.show = true;
                        $scope.successMsg.msg = 'Admin Created.';
                        $scope.$parent.genericSuccessMsg.show = true;
                        $scope.$parent.genericSuccessMsg.msg = 'Admin Created.';
                        $scope.$parent.init();
                    }, function(err) {
                        if(err.status === 400) {
                            $scope.genericError.msg = err.data.feedback[0];
                            $scope.genericError.valid = false;
                            $scope.successMsg.show = false;
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