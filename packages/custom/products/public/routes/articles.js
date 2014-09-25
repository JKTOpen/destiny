'use strict';

//Setting up route
angular.module('mean.products').config(['$stateProvider',
  function($stateProvider) {
    // Check if the user is connected
    var checkLoggedin = function($q, $timeout, $http, $location) {
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') $timeout(deferred.resolve);

        // Not Authenticated
        else {
          $timeout(deferred.reject);
          $location.url('/login');
        }
      });

      return deferred.promise;
    };

    // states for my app
    $stateProvider
      .state('all products', {
        url: '/products',
        templateUrl: 'products/views/list.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('create product', {
        url: '/products/create',
        templateUrl: 'products/views/create.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('edit product', {
        url: '/products/:productId/edit',
        templateUrl: 'products/views/edit.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('product by id', {
        url: '/products/:productId',
        templateUrl: 'products/views/view.html',
        resolve: {
          loggedin: checkLoggedin
        }
      });
  }
]);
