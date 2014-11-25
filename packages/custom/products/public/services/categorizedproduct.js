'use strict';

//Products service used for products REST endpoint
angular.module('mean.products').factory('CategorizedProducts', ['$resource',
  function($resource) {
    return $resource('/products/category/:categoryId', {
      categoryId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);




