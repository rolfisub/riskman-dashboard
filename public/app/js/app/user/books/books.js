/**
 * Landing page main controller
 *
 * @package   Nova
 * @author    Rolf Bansbach
 * @copyright Copyright 2017 Trxadegroup, Inc.
 */

define('books',[
    'admin',
    'header',
    'footer',
    'mainpanel'
], function(admin){
    admin.cp.register('books',[
        '$scope', 
        '$sce', 
    function ($scope, $sce) {
        
        $scope.msg = 'test books controller';
    }]);
});
