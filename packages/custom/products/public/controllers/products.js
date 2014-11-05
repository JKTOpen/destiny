'use strict';

angular.module('mean.products').controller('ProductsController', ['$scope', '$stateParams', '$location', 'Global', 'Products',
  function($scope, $stateParams, $location, Global, Products) {
    $scope.global = Global;
    $scope.images = [];
     
    $scope.hasAuthorization = function(product) {
      if (!product || !product.user) return false;
      return $scope.global.isAdmin || product.user._id === $scope.global.user._id;
    };

       
    $scope.create = function(isValid) {
     
       if (isValid) {
          var current = this; 
      angular.forEach($scope.images, function(image, key) {
          var product = new Products({
          title: current.title,
          description: current.description,
          tag: current.tag,
          color: current.color,
          category: current.category,
          images:{
                              
                    name: image.name,
                    src: image.src,
                    size: image.size,
                    type: image.type,
                    created: Date.now()

                  } 
         });
          console.log('product=' + product);
          product.$save(function(response) {
          console.log('Hello product saved=' + product);          
          $location.path('products/' + response._id);
                });
      });
      } else {
        $scope.submitted = true;
    
      }
      
        this.title = '';
        this.description = '';
        this.tag = '';
        this.color = '';
     
    };


    $scope.remove = function(product) {
      if (product) {
        product.$remove();

        for (var i in $scope.products) {
          if ($scope.products[i] === product) {
            $scope.products.splice(i, 1);
          }
        }
        $location.path('products');
      } else {
        $scope.product.$remove(function(response) {
          $location.path('products');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
       angular.forEach($scope.images, function(image, key) {
        var product = $scope.product;
            product.images.name = image.name;
            product.images.src =  image.src ;
            product.images.size = image.size ;
            product.images.type = image.type;
            product.images.created = Date.now();

                
        

        if (!product.updated) {
          product.updated = [];
        }
        product.updated.push(new Date().getTime());

        product.$update(function() {
          $location.path('products/' + product._id);
        });
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
         $scope.images.push(product.images);
             
         });
    };
      
  
  
 $scope.deleteImage = function() {
      $scope.images = []; 
      $scope.errorMessages = ' ' ;
     $scope.slides = [];
     };


    $scope.uploadFileCallback = function(file) {
    $scope.errorMessages = [];  
       console.log('length images'+ $scope.images.length);


      if ($scope.images.length === 0 && file.type.indexOf('image') !== -1) {
          $scope.errorMessages = '' ;
          $scope.images.push(file);
          $scope.addSlide(file.src);
          }
      else if ($scope.images.length === 1 && file.type.indexOf('image') !== -1) {
          $scope.errorMessages.push('More Than One Image Not Allowed');   
          } else {
            $scope.errorMessages.push('File Type Not Allowed');
           //  $scope.images=[];
                  }
   
   console.log('length images at exit'+ $scope.images.length);   
    };

    $scope.uploadFinished = function(files) {
      console.log(files);
    };

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function(url) {
//           var newWidth = 600 + slides.length;
       slides.push({
         image: url
       });
    };


 
  }
]);
