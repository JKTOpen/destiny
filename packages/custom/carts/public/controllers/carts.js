'use strict';

angular.module('mean.carts').controller('CartsController', ['$scope', '$stateParams', '$location','Global', 'Carts','ngCart','Orders',
  function($scope, $stateParams, $location, Global, Carts,ngCart, Orders) {
    $scope.global = Global;
    $scope.package = {
      name: 'carts'
    };
    $scope.orderError = false;
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
    
    $scope.checkout = function() {
      if(ngCart.toObject()){
        var order = new Orders(ngCart.toObject());  
        order.$save({},function(response) {
          ngCart.empty();
          $location.path('orders');
        },function(error) {
            console.log('Could not save the data');
        });
      }else{
            $scope.orderError = true ;
           console.log('build order ');
       } 
    };
  }
]);
