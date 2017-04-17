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
        
        $scope.deleteAdmin = function(admin) {
            var r = adminsSrv.deleteAdmin(admin);
            r.then(function(res){
                //code 200
                $scope.init();
            }, function(err){
                //code 400 >
                console.log(err);
            });
        };
        
        $scope.init();
        
    }]);
});
