'use strict';
angular.module('mean.system').controller('SearchController', ['$scope', '$rootScope', 'Global', 'Menus','CategorizedProducts',
  function($scope, $rootScope, Global, Menus, CategorizedProducts) {
    $scope.global = Global;
    $scope.searchProducts = function() {
        console.log($scope.searchString+ $scope.category);
      CategorizedProducts.query(
        {
          categoryId: $scope.category,
          searchString: $scope.searchString
        },
      function(products) {
        $scope.categorizedProducts = products;

        
        console.log('I am here');
        console.log(products);
      });

    };
  }
]);