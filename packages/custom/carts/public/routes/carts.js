'use strict';

angular.module('mean.carts').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('carts example page', {
      url: '/carts/example',
      templateUrl: 'carts/views/index.html'
    })
    .state('view cart', {
        url: '/cart',
        templateUrl: 'carts/views/cart.html'
    });
  }
]);
