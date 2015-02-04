'use strict';

//Products service used for products REST endpoint
angular.module('mean.products').factory('ProductCategoryLists', ['$resource',
  function($resource) {
    return $resource('/productCategoryList', {
      categoryList: '@categoryList'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

