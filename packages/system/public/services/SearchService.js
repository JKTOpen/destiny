'use strict';

//Search Product service used for search bar
angular.module('mean.system').factory('SearchService', ['$resource',
  function($resource) {
    return $resource('/search', {keyword:'@keyword'});
  }
]);