/* 
    Created on : Feb 28, 2017, 1:11:58 AM
    Author     : rolf
*/


requirejs.config({
    baseUrl: '../../app/js',
    
    paths:{
        'jquery':'lib/jquery-1.10.2',
        'bootstrap':'lib/bootstrap.min'
    },
    
    
    shim:{
        'jquery':{
           exports:'$'  
        },
        'bootstrap':{
            deps:['jquery']
        }
    }
});

require([
    'jquery',
    'bootstrap'
], function($){
    //do nothing
   
});


