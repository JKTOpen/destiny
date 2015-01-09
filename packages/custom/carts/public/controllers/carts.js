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
         var order = new Orders({order:$scope.summary});
         console.log('order object created ');
         console.log(order);
          order.$save(function(response) {
            console.log('order.save ');
            console.log(response);
            console.log('checking  ');
        //$location.path('orders/');
        });
    };
  }
]);
