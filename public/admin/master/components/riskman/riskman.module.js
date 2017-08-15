/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    'use strict';
    var riskman = angular
        .module("riskman",[
            'xeditable',
            'mgcrea.ngStrap',
            'riskman.pages',
            'riskman.services',
            'riskman.directives'
        ]);
    
    riskman.run(function(editableOptions){
        editableOptions.theme = 'bs3';
    });
})();



