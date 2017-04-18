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
    'admins/deleteAdminPop',
    'admins/editAdminPop',
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
        
        $scope.admins = {
            config: {
                edit: {
                    show: true,
                    title: 'edit'
                },
                delete: {
                    show: true,
                    title: 'delete'
                },
                add: {
                    show: true,
                    title: 'add'
                }
            }
        };
        
        
        
        $scope.init();
        
    }]);
});
