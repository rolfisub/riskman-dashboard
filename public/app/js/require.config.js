/* 
    Created on : Feb 28, 2017, 1:11:58 AM
    Author     : rolf
*/


requirejs.config({
    baseUrl: '../../app/js',
    
    paths:{
        'jquery':'lib/jquery-1.10.2',
        'bootstrap':'lib/bootstrap.min',
        'chartist':'lib/chartist.min',
        'bootstrap-notify':'lib/bootstrap-notify',
        'googlemaps':'https://maps.googleapis.com/maps/api/js?sensor=false',
        'light-bootstrap-dashboard':'lib/light-bootstrap-dashboard',
    },
    
    
    shim:{
        'jquery':{
           exports:'$'  
        },
        'bootstrap':{
            deps:['jquery']
        },
        'chartist':{
            deps:['jquery', 'bootstrap']
        },
        'bootstrap-notify':{
            deps:['jquery', 'bootstrap']
        },
        'light-bootstrap-dashboard':{
            deps:['jquery', 'bootstrap', 'chartist', 'bootstrap-notify']
        }
        
        
    }
});

require([
    'jquery',
    'bootstrap',
    'chartist',
    'bootstrap-notify',
    'light-bootstrap-dashboard'
], function($){
    //do nothing
   
});


