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
            }
        };
        
        this.setUserName = function(username) {
            admin.create_data.username = username;
        };
        this.setPassword = function(password) {
            admin.create_data.password = password;
        };
        this.setEmail = function(email) {
            admin.create_data.email = email;
        };
        this.setFirstName = function(firstname) {
            admin.create_data.firstname = firstname;
        };
        this.setLastName = function(lastname) {
            admin.create_data.lastname = lastname;
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

