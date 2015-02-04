'use strict';

angular.module('mean.system').factory('ConfigService', ['$resource',
  function($resource) {
    return $resource('/configs');
  }
]);