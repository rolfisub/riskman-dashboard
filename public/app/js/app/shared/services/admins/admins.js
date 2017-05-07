/**
 * Admins rest interface
 *
 * @package   RiskMan
 * @author    Rolf
 * 
 */

define('admins/service',['admin'], function(admin){
    /**
     * API service wrapper to make Ajax calls for Trxade
     */
    admin.sp.service('adminsSrv', ['api', function (api) {
        
        /*
         * data for actions
         */
        var admin = {
            create_data: {
                username:'',
                password:'',
                email:'',
                firstname:'',
                lastname:''
            },
            update_data: {
                password:'',
                passwordnew:'',
                passwordnew2:'',
                email:'',
                firstname:'',
                lastname:''
            }
        };
        
        this.setCreateUserName = function(username) {
            admin.create_data.username = username;
        };
        this.setCreatePassword = function(password) {
            admin.create_data.password = password;
        };
        this.setCreateEmail = function(email) {
            admin.create_data.email = email;
        };
        this.setCreateFirstName = function(firstname) {
            admin.create_data.firstname = firstname;
        };
        this.setCreateLastName = function(lastname) {
            admin.create_data.lastname = lastname;
        };
        
        
        
        this.setUpdateEmail = function(email) {
            admin.update_data.email = email;
        };
        this.setUpdateFirstName = function(firstname) {
            admin.update_data.firstname = firstname;
        };
        this.setUpdateLastName = function(lastname) {
            admin.update_data.lastname = lastname;
        };
        this.setUpdatePassword = function(password) {
            admin.update_data.password = password;
        };
        this.setUpdatePasswordNew = function(password) {
            admin.update_data.passwordnew = password;
        };
        this.setUpdatePasswordNew2 = function(password) {
            admin.update_data.passwordnew2 = password;
        };
        
        this.resetUpdateData = function(){
            admin.update_data = {
                password:'',
                passwordnew:'',
                passwordnew2:'',
                email:'',
                firstname:'',
                lastname:''
            };
        };
        
        
        this.resetCreateData = function(){
            admin.create_data = {
                username:'',
                password:'',
                email:'',
                firstname:'',
                lastname:''
            };
        };
        
        
        this.createAdmin = function()
        {
            return api.create('/admins', admin.create_data);
        };
        
        this.updateAdmin = function(id){
            return api.update('/admins/' + id, admin.update_data);
        };
        
        this.getAdminByUsername = function(username) {
            return api.read('/admins/' + username);
        };
        
        
        
        //private functions
        this.getAdminsList = function() {   
            return api.read('/admins');
        };
        
        
        this.errorCallBack = function(response) {
            api.errorCallback(response);
        };
        
        this.deleteAdmin = function(admin) {
            return api.deleteById('/admins', admin);
        };
        

    }]);
});

