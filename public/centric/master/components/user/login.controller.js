(function() {
    'use strict';

    angular
        .module('app.user', ['app.services'])
        .controller('loginCtrl', ['$scope','auth','$state', function($scope, auth, $state) {
            
            $scope.model =  {
                username: '',
                password: ''
            };
            
            $scope.auth = function() {
                var r = auth.auth($scope.model);
                r.then(function(res){
                    if(res.data.success) {
                        $state.go('app.dashboard');
                    } 
                }, function(err) {
                    console.log(err);
                });
            };
            
            var init = function() {
                console.log('init');
                
            };
            
            init();
            
            
    
        }]);
})();