'use strict';

angular.module('mean.carts').controller('CartsController', ['$scope', '$stateParams', '$location','Global', 'Carts','ngCart','Orders',
  function($scope, $stateParams, $location, Global, Carts,ngCart, Orders) {
    $scope.global = Global;
    $scope.package = {
      name: 'carts'
    };

    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
    // console.log(ngCart);
    $scope.checkout = function() {
        $scope.summary = ngCart.toObject();
         // Post your cart to your resource
         //$http.post('cart/', ngCart.toObject());
         var order = new Orders($scope.summary);
         console.log('order object created ');
         console.log(order);
          /*order.$save(function(response) {
            ngCart.init();
            console.log('order.save ');
            console.log(response);
            console.log('checking  ');
        //$location.path('orders/');
        });*/

          order.$save({},function(response) {
                     ngCart.empty();
                    
                //$location.path('orders/');
                },function(error) {
                    console.log('Could not save the data');
                });
    };


    $scope.find = function() {
      Orders.query(function(orders) {
        //$scope.orders = orders;
        console.log(orders);
      });
    };

 $scope.findOne = function() {
      Orders.get({
        orderId: $stateParams.orderId
      }, function(order) {
        //$scope.order = order;
        console.log(order);
      });
    };


  }
]);
