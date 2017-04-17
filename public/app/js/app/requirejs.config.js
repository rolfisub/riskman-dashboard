/**
 * Main configuration file Requirejs and Angular manual bootstrap call
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 * 
 */

require.config({
    //set up base url for js scripts
    baseUrl:'../../app/js',
    
    
    //library paths
    paths: {
        
        //3rd party libs:
        'angular': 'lib/angular/angular.min',
        'ngRoute': 'lib/angular/angular-route.min',
        'angularAMD': 'lib/angularAMD/angularAMD.min',
        'angular-animate': 'lib/angular/angular-animate.min',
        'angular-touch': 'lib/angular/angular-touch.min',
        'angular-sanitize':'lib/angular/angular-sanitize.min',
        'ui.bootstrap': 'lib/bootstrap-3.3.7-dist/js/ui-bootstrap-tpls.min',
        'click.outside': 'lib/angular-click-outside/angular.click.outside',
        'string': 'lib/ng-string/ng-string.min',
        'angular-spinners': 'lib/angular-spinners/angular-spinners',
        'angular-strap':'lib/angular-strap/dist/angular-strap',
        'angular-strap/tpl':'lib/angular-strap/dist/angular-strap.tpl',
        
        //main application module
        'admin': 'app/admin',
        
        //services:
        'api':'app/shared/services/api/api.service',
        'admins/service':'app/shared/services/admins/admins',
        'adminsCreate/validator' : 'app/shared/services/validators/admins/adminsCreate',
        
        //user controllers
        'home': 'app/user/home/home',
        'admins': 'app/user/admins/admins',
        'users': 'app/user/users/users',
        'books': 'app/user/books/books',
        'reports': 'app/user/reports/reports',
        
        //shared controllers
        '404': 'app/user/404/404',
        
        //shared directives
        'header': 'app/shared/directives/header/header',
        'footer': 'app/shared/directives/footer/footer',
        'mainpanel': 'app/shared/directives/mainpanel/mainpanel',
        'navbar': 'app/shared/directives/navbar/navbar',
        'sidebar': 'app/shared/directives/sidebar/sidebar',
        'admins/createAdminPop': 'app/shared/directives/admins/createAdminPop/createAdminPop',
        'admins/deleteAdminPop': 'app/shared/directives/admins/deleteAdminPop/deleteAdminPop'
        
        //admin controllers
        //'admin/hello': 'app/admin/hello/hello',
        
        //admin directives
        
        
    },
    
    //wrapper for compatibility and lib dependencies
    shim: {
        'angular':{
            exports:'angular'
        },
        'ngRoute':{
            deps:['angular']
        },
        'angularAMD':{
            deps:['angular']
        },
        'ui.bootstrap':{
            deps:[
                'angular', 
                'angular-animate',
                'angular-touch'
            ]
        },
        'angular-touch':{
            deps:['angular']
        },
        'angular-animate':{
            deps:['angular']
        },
        'click.outside': {
            deps:['angular']
        },
        'string':{
            deps:['angular']
        },
        'angular-spinners':{
            deps:['angular']
        },
        'angular-sanitize':{
            deps:['angular']
        },
        'angular-strap':{
            deps:['angular','angular-animate', 'angular-sanitize']
        },
        'angular-strap/tpl':{
            deps:['angular-strap']
        }
        
    }
    
});

//angular bootstrap
require(['angularAMD', 'admin'], function (angularAMD, admin) {
    //on document ready
    angular.element(document).ready(function () {
        // initialisation code defined within admin.js
        angular.bootstrap(document, ['admin']);
        //angularAMD.bootstrap(admin);
    });
});


