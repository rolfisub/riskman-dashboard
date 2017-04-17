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
    'admins/createAdminPop',
    'admins/service',
    'adminsCreate/validator'
], function(admin){
    admin.cp.register('admins',[
        '$scope',        
        'adminsSrv',
    function ($scope, adminsSrv) {
        $scope.init = function() {
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
        
        $scope.genericErrorMsg = {
            msg: '',
            show: false
        };
        
        $scope.genericSuccessMsg = {
            msg: '',
            show: false
        };
        
        $scope.deleteAdmin = function(admin) {
            var r = adminsSrv.deleteAdmin(admin);
            r.then(function(res){
                //code 200
                $scope.genericErrorMsg.show = false;
                $scope.genericSuccessMsg.msg = 'Admin deleted.';
                $scope.genericSuccessMsg.show = true;
                $scope.init();
            }, function(err){
                //code 400 >
                if(err.status === 400) {
                    $scope.genericErrorMsg.msg = err.data.feedback[0];
                    $scope.genericErrorMsg.show = true;
                    $scope.genericSuccessMsg.show = false;
                } else {
                    adminsSrv.errorCallBack(err);
                }
                
            });
        };
        
        $scope.init();
        
    }]);
});
