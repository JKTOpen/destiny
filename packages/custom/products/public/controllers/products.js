'use strict';

angular.module('mean.products').controller('ProductsController', ['$scope', '$stateParams', '$location', 'Global', 'Products',
  function($scope, $stateParams, $location, Global, Products) {
    $scope.global = Global;

    $scope.hasAuthorization = function(product) {
      if (!product || !product.user) return false;
      return $scope.global.isAdmin || product.user._id === $scope.global.user._id;
    };

    $scope.create = function(isValid) {
      if (isValid) {
        var product = new Products({
          title: this.title,
          description: this.description,
          tag: this.tag,
          color: this.color,
          category: this.category
        });
        product.$save(function(response) {
          $location.path('products/' + response._id);
        });

        this.title = '';
        this.description = '';
        this.tag = '';
        this.color = '';
        this.category = '';
      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(product) {
      if (product) {
        product.$remove();

        for (var i in $scope.products) {
          if ($scope.products[i] === product) {
            $scope.products.splice(i, 1);
          }
        }
      } else {
        $scope.product.$remove(function(response) {
          $location.path('products');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var product = $scope.product;
        if (!product.updated) {
          product.updated = [];
        }
        product.updated.push(new Date().getTime());

        product.$update(function() {
          $location.path('products/' + product._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Products.query(function(products) {
        $scope.products = products;
      });
    };

    $scope.findOne = function() {
      Products.get({
        productId: $stateParams.productId
      }, function(product) {
        $scope.product = product;
      });
    };
  }
]);
