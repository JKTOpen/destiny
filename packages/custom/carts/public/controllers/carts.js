'use strict';

angular.module('mean.carts').controller('CartsController', ['$scope', 'Global', 'Carts','ngCart',
  function($scope, Global, Carts,ngCart) {
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
    };
  }
]);
