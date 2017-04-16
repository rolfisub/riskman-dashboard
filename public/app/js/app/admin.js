/**
 * Main angular module for admin
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

/*
 * insert angular dependency using RequireJs
 */

define('admin',[
    'angularAMD',
    'ngRoute', 
    'ui.bootstrap', 
    'click.outside',
    'angular-spinners',
    'angular-strap',
    'angular-strap/tpl'
], function(angularAMD){
    //Angular Code Start
    /*
     * Create main site angular application and inject angular dependencies
     */
    var admin = angular.module('admin',[
        //angular dependencies
        'ngRoute',
        'ui.bootstrap',
        'angular-click-outside',
        'angularSpinners',
        'mgcrea.ngStrap'
    ]);

    /**
    * Set routes and main config for admin app
    * $routeProvider, $locationProvider are created by ngRoute
    * $controllerProvider, $compileProvider and $provide are globals to be able to instantiate code 
    *   after angular has done its bootstrap
    */
    admin.config(function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $provide, $filterProvider) { 
        $routeProvider
            .otherwise({
               // redirectTo: '/Admin/404',
                
        });
        //csrf
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        
        /**
         * Global providers are used to register lazy loaded components in angular after bootstrap in to admin module
         */
        //controller provider 
        admin.cp = $controllerProvider;
        
        //directive provider
        admin.dp = $compileProvider;
        
        //service and factory provider
        admin.sp = $provide;
        
        //filter provider
        admin.fp = $filterProvider;
    });
    
    /**
     * Wrapper to create User routes
     * @param {type} controllerName
     * @returns {undefined}
     */
    admin.addUserRoute = function(controllerName){
        admin.addRoute('user', controllerName, controllerName);
    }
    
    /**
     * Wrapper to create admin routes
     * @param {type} controllerName
     * @returns {undefined}
     */
    admin.addAdminRoute = function(controllerName){
        admin.addRoute('admin', 'admin/' + controllerName, controllerName);
    }
    /**
     * @desc Creates a new route and loads required scripts on demand for that route
     * @param {string} baseFolder
     * @param {string} controllerName
     * @param {string} fileName
     * @returns {null}
     */
    admin.addRoute = function(baseFolder, controllerName, fileName){
        var myroute = '/Admin/';
        var mytemplate = '/app/js/app/' + baseFolder + '/' + fileName + '/' + fileName +'.html';
        if (baseFolder !== 'user') {
            myroute = myroute + baseFolder + '/' + fileName;
        } else {
            myroute = myroute + controllerName;
        }
        admin.config(function ($routeProvider) {
            $routeProvider
                .when(
                    myroute,
                    angularAMD.route({
                        templateUrl: mytemplate,
                        controller: controllerName
                    })
                );    
        }); 
    }
    
    
   /**
     * Create new routes here 
     */
    //landing page, routes to /Admin/home
    admin.addUserRoute('home');
    //landing page, routes to /Admin/admins
    admin.addUserRoute('admins');
    //landing page, routes to /Admin/users
    admin.addUserRoute('users');
    //landing page, routes to /Admin/books
    admin.addUserRoute('books');
    //landing page, routes to /Admin/reports
    admin.addUserRoute('reports');
    //404 page, routes to /Admin/404
    admin.addUserRoute('404');
    
    
    //hello page, routes to /market/admin/hello
    //admin.addAdminRoute('hello');
    //other routes
    
    


    return admin;
    //Angular Code End

});


