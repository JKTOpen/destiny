'use strict';

angular.module('mean.orders').controller('OrdersController', ['$scope', '$stateParams', '$location','Global', 'Carts','ngCart','Orders',
  function($scope, $stateParams, $location, Global, Carts,ngCart, Orders) {
    $scope.global = Global;
    $scope.package = {
      name: 'carts'
    };

  $scope.find = function() {
      Orders.query(function(orders) {
        $scope.orders = orders;
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
