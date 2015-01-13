'use strict';

angular.module('mean.carts').controller('CartsController', ['$scope', '$stateParams','$window' ,'$location','Global', 'Carts','ngCart','Orders',
  function($scope, $stateParams, $window, $location, Global, Carts,ngCart, Orders) {
    $scope.global = Global;
    $scope.package = {
      name: 'carts'
    };
    $scope.summary = true ;
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
    
    $scope.checkout = function() {
      
      //$scope.summary = ngCart.toObject();
      /*if(typeof order.items !== 'undefined'){*/
      if(ngCart.toObject()){
        var order = new Orders(ngCart.toObject());  
        order.$save({},function(response) {
          ngCart.empty();
          $location.path('orders');
        },function(error) {
            console.log('Could not save the data');
        });
      }else{
            $scope.summary = false ;
           
       } 
    };
  }
]);
