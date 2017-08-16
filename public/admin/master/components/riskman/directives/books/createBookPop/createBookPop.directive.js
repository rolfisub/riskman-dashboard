/**
 * Testing angular controller and route
 *
 * @package   RiskMan
 * @author    Rolf Bansbach
 */

(function() {
    'use strict';
    angular
        .module("riskman.directives")
        .directive('createBookPop', function(){
        return {
            restrict: 'E', //This means that it will be used as an element and NOT as an attribute.
            replace: true,
            // scope: { data: '=' },
            templateUrl: "app/views/createBookPop.html",
            //template:'<button type="button" class="btn btn-raised btn-success ripple m-sm" title="{{newadminPop.title}}"     data-content="{{newadminPop.content}}"     data-template-url="../views/createAdminPopTemplate.html"     data-animation="am-flip-x"                 data-auto-close="1"                 data-placement="bottom-left"                data-on-show="reset()"                bs-popover    >    <span class="ion-android-person-add"></span></button>',
            controller: ['$scope', 'books', function ($scope, books) {
                $scope.dataCreate = {
                    name:''
                };

                $scope.newbookPop = {
                    title:'Create New Book',
                    content:'Please fill out the following form <br>to create a new book',
                    hide: true
                };

                $scope.createDataStatus = {
                    name:{
                        msg:'',
                        valid: true
                    }
                };
                $scope.createForm = {
                    isValid : false
                };
                $scope.genericError = {
                    msg:'',
                    show: false
                };
                $scope.successMsg = {
                    msg:'Book created.',
                    show: false
                };
                
                $scope.reset = function(){
                    $scope.dataCreate = {
                        name:''
                    };
                };
                
                $scope.validateField = function(fieldName) {
                    if(fieldName === 'name') {
                        if($scope.dataCreate.name.length < 4) {
                            $scope.createDataStatus.name.msg = 'Name must be at least 4 characters in length.';
                            $scope.createDataStatus.name.valid = false;
                        } else {
                            $scope.createDataStatus.name.valid = true;
                        }
                    }
                    $scope.isFormValid();
                };
                
                $scope.isFormValid = function() {
                    var invalidCount = 0;
                    angular.forEach($scope.createDataStatus, function(field){
                        if(field.valid === false) {
                            invalidCount++;
                        }
                    });
                    $scope.createForm.isValid = invalidCount === 0;
                    return invalidCount === 0;
                };
                
                $scope.createBook = function() {
                    var r = books.createBook($scope.dataCreate);
                    r.then(function(res){
                        $scope.$emit('initBooks', {});
                        $scope.successMsg = {
                            msg: 'Book created.',
                            show: true
                        };
                        $scope.reset();
                    }, books.onError);
                };

            }]
        };
    });
})();