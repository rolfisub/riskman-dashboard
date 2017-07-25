(function() {
    'use strict';

    angular
        .module('app.user', ['app.services'])
        .controller('loginCtrl', ['$scope','auth','$state', function($scope, auth, $state) {
            
            $scope.model =  {
                username: '',
                password: ''
            };
            
            
            $scope.errorLogin = {
                msg: ''
            };
            
            $scope.keypress = function(event) {
                var keyCode = event.keyCode;
                if(keyCode === 13) {
                    $scope.auth();
                }
            };
            
            $scope.auth = function() {
                var r = auth.auth($scope.model);
                r.then(function(res){
                    if(res.data.success) {
                        $state.go('app.home');
                    } 
                }, function(err) {
                    $scope.errorLogin.msg = err.data.feedback[0];
                    //console.log(err);
                });
            };
            
            var init = function() {
                //console.log('init');
                
            };
            
            init();
            
            
    
        }]);
})();