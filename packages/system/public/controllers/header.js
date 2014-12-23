'use strict';

angular.module('mean.system')
.controller('HeaderController', ['$scope', '$rootScope', 'Global', 'Menus','ProductCategoryLists',
  function($scope, $rootScope, Global, Menus,ProductCategoryLists) {
    $scope.global = Global;
    $scope.menus = {};
    $scope.cart = [];

    $scope.loadCategory = function() {
      ProductCategoryLists.query(function(productCategory) {
        $scope.listingCategory = productCategory;
      });
    };

    // Default hard coded menu items for main menu
    var defaultMainMenu = [];

    // Query menus added by modules. Only returns menus that user is allowed to see.
    function queryMenu(name, defaultMenu) {

      Menus.query({
        name: name,
        defaultMenu: defaultMenu
      }, function(menu) {
        $scope.menus[name] = menu;
      });
    }

    // Query server for menus and check permissions
    queryMenu('main', defaultMainMenu);

    $scope.isCollapsed = false;

    $rootScope.$on('loggedin', function() {

      queryMenu('main', defaultMainMenu);

      $scope.global = {
        authenticated: !! $rootScope.user,
        user: $rootScope.user
      };
    });

    $rootScope.$on('addtocart', function() {
      $scope.cart = $rootScope.cart;
    });

  }
]);
