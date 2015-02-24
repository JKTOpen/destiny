'use strict';

//Carts service used for carts REST endpoint
angular.module('mean.carts').factory('Carts', ['$resource',
  function($resource) {
    return $resource('carts/:userId', {
      userId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);





