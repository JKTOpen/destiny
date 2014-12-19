'use strict';
angular.module('mean.system').controller('SearchController', ['$scope', '$rootScope', '$location', 'Global', 'Menus','CategorizedProducts', 'SearchService',
  function($scope, $rootScope, $location, Global, Menus, CategorizedProducts, SearchService) {
    $scope.global = Global;
    $scope.searchProducts = function() {
      if ($scope.category !== undefined && $scope.category !== '') {
        CategorizedProducts.query({keyword: $scope.keyword, categoryId: $scope.category},
          function(products) {
            $rootScope.$broadcast('searchProductEvent', products);
            $location.url('/products');
          });
      } else if ($scope.category === undefined  || $scope.category === '') {
          SearchService.query({keyword: $scope.keyword}, function(products) {
            $rootScope.$broadcast('searchProductEvent', products);
            $location.url('/products');
          });
      }
    };
  }
]);