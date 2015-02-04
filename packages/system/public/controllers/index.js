'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global','ProductCategoryLists','CategorizedProducts','ConfigService',
  function($scope, Global, ProductCategoryLists, CategorizedProducts, ConfigService) {
    $scope.global = Global;

    $scope.loadCategory = function() {

    	var categoryList;
    	ConfigService.query({name: 'cat_slider'},function(configs) {
        console.log('config..................');
        console.log(configs);
        categoryList = configs[0].value.categories;
        console.log('category list..................');
        console.log(categoryList);
        $scope.productsPerCategory = configs[0].value.products_quantity;

        var stringifiedCategoryList = angular.toJson(categoryList);

        ProductCategoryLists.query({categoryList: stringifiedCategoryList}, function(productCategory) {
          $scope.listingCategory = productCategory;
        });

        //$scope.listingCategory = configs[0].categoryList;
        });

    };

    $scope.listProductByCategory = function(category) {
      CategorizedProducts.query(
        {
          categoryId: category._id
        },
      function(products) {
        category.products = products;
      });
    };

    $scope.sites = {
      'makeapoint':{
        'name':'makeapoint',
        'text':'Makeapoint is a platform to craft and fine-tune ideas and messages providing a graphical experience which brough an offline methodlogy online',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'/theme/assets/img/makeapoint.png'
      },
      'intranet':{
        'name':'Intranet',
        'text':'Enterpintranet',
        'author':'qed42',
        'link':'http://www.qed42.com',
        'image':''
      }
    };
    $scope.packages = {
      'gmap':{
        'name':'gmap',
        'text':'gmap lets you add geographical information to your applications objects',
        'author':'linnovate',
        'link':'http://www.qed42.com',
        'image':'/theme/assets/img/gmap.png'
      },
      'upload':{
        'name':'Upload',
        'text':'hello text',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      },
      'socket':{
        'name':'Socket',
        'text':'Socket.io support',
        'author':'Linnovate',
        'link':'http://www.linnovate.net',
        'image':'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      }
    };

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i+=1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
