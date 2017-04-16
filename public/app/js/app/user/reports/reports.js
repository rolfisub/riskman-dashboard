/**
 * Landing page main controller
 *
 * @package   Nova
 * @author    Rolf Bansbach
 * @copyright Copyright 2017 Trxadegroup, Inc.
 */

define('reports',[
    'admin',
    'header',
    'footer',
    'mainpanel'
], function(admin){
    admin.cp.register('reports',[
        '$scope', 
        '$sce', 
    function ($scope, $sce) {
        
        $scope.msg = 'test reports controller';
    }]);
});
