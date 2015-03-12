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
])
.controller('SliderController', function($scope) {
    $scope.images=[{src:'/system/assets/img/img1.png',title:'Pic 1'},{src:'/system/assets/img/img2.jpg',title:'Pic 2'},{src:'/system/assets/img/img3.jpg',title:'Pic 3'},{src:'/system/assets/img/img4.png',title:'Pic 4'},{src:'/system/assets/img/img5.png',title:'Pic 5'}];
})
.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
  replace: true,
  scope:{
    images: '='
  },
    link: function (scope, elem, attrs) {

    scope.currentIndex=0;

    scope.next=function(){
      scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
    };

    scope.prev=function(){
      scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
    };

    scope.$watch('currentIndex',function(){
      scope.images.forEach(function(image){
        image.visible=false;
      });
      scope.images[scope.currentIndex].visible=true;
    });

    /* Start: For Automatic slideshow*/

    var timer;

    var sliderFunc=function(){
      timer=$timeout(function(){
        scope.next();
        timer=$timeout(sliderFunc,3000);
      },3000);
    };

    sliderFunc();

    scope.$on('$destroy',function(){
      $timeout.cancel(timer);
    });

    /* End : For Automatic slideshow*/
    angular.element(document.querySelectorAll('.arrow')).one('click',function(){
      $timeout.cancel(timer);
    });
    },
  templateUrl:'/system/assets/templates/templateurl.html'
  }
});
