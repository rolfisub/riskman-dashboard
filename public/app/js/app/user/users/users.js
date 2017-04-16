/**
 * Landing page main controller
 *
 * @package   Nova
 * @author    Rolf Bansbach
 * @copyright Copyright 2017 Trxadegroup, Inc.
 */

define('users',[
    'admin',
    'header',
    'footer',
    'mainpanel'
], function(admin){
    admin.cp.register('users',[
        '$scope', 
        '$sce', 
    function ($scope, $sce) {
        
        $scope.msg = 'test users controller';
    }]);
});
