/**
 * admins route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

define('admins',[
    'admin',
    'header',
    'footer',
    'mainpanel',
    'admins/service',
    'adminsCreate/validator'
], function(admin){
    admin.cp.register('admins',[
        '$scope', 
        '$sce',
        'adminsSrv',
        'adminCreateValidate',
    function ($scope, $sce, adminsSrv, createValidator) {
        
        
        
        var init = function() {
            var r = adminsSrv.getAdminsList()
            r.then(function(response){
                $scope.data = response.data.admins_data;
            },adminsSrv.errorCallBack);
        };
        
        $scope.data = [
            {
                username: '',
                datetime:'',
                email:'',
                firstname:'',
                lastname:''
            }
        ];
        
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
            content:'Please fill out the following form <br>to create a new administrator'
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
        
        $scope.validateCreateField = function(field) {
            $scope.createDataStatus = createValidator.validateObjectField(field, $scope.createDataStatus, $scope.dataCreate);
            $scope.createForm.isValid = createValidator.isFormValid($scope.dataCreate);
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
                console.log(res);
            },function(err){
                console.log(err);
            });
        };
        
        
        init();
        
    }]);
});
