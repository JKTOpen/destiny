'use strict';

//Products service used for products REST endpoint
angular.module('mean.orders').factory('Orders', ['$resource',
  function($resource) {
    return $resource('orders/:orderId', {
      orderId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

