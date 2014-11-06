'use strict';

angular.module('mean.users').factory('MeanUser', ['$resource',
  function($resource) {
    return $resource('users/:userId', {
      productId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
