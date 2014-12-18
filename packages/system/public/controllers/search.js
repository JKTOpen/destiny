'use strict';
angular.module('mean.system').controller('SearchController', ['$scope', '$rootScope', '$location', 'Global', 'Menus','CategorizedProducts', 'SearchService',
  function($scope, $rootScope, $location, Global, Menus, CategorizedProducts, SearchService) {
    $scope.global = Global;
    $scope.searchProducts = function() {
      if ($scope.category !== undefined) {
        CategorizedProducts.query({keyword: $scope.keyword, categoryId: $scope.category},
          function(products) {
            $rootScope.$broadcast('searchProductEvent', products);
            $location.url('/products');
          });
      } else if ($scope.category === undefined){
        console.log('Without category search');
        SearchService.query({keyword: $scope.keyword}, function(products) {
            $rootScope.$broadcast('searchProductEvent', products);
            $location.url('/products');
          });
      }
    };
  }
]);