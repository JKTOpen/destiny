'use strict';

angular.module('mean.orders').controller('OrdersController', ['$scope', '$stateParams', '$location','Global', 'Carts', 'Orders',
  function($scope, $stateParams, $location, Global, Carts, Orders) {
    $scope.global = Global;
    
  $scope.find = function() {
      Orders.query(function(orders) {
        $scope.orders = orders;
      });
    };

  $scope.findOne = function() {
      Orders.get({
        orderId: $stateParams.orderId
      },function(orders) {
        $scope.orders = orders;
      });
    };
  }
]);
