'use strict';
angular.module('mean.system').controller('SearchController', ['$scope', '$rootScope', '$location', 'Global', 'Menus','CategorizedProducts',
  function($scope, $rootScope, $location, Global, Menus, CategorizedProducts) {
    $scope.global = Global;
    $scope.searchProducts = function() {
      if ($scope.category !== undefined) {
        CategorizedProducts.query({keyword: $scope.keyword, categoryId: $scope.category},
          function(products) {
            //console.log('I am here');
            console.log(products);
            $rootScope.$broadcast('fillProductsByCategory', products);
            $location.url('/products');
          });
      } else {
        console.log('HELP ME');
        $location.url('/products');
      }
    };
  }
]);