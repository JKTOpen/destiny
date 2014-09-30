'use strict';

(function() {
  // Products Controller Spec
  describe('MEAN controllers', function() {
    describe('ProductsController', function() {
      // The $resource service augments the response object with methods for updating and deleting the resource.
      // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
      // the responses exactly. To solve the problem, we use a newly-defined toEqualData Jasmine matcher.
      // When the toEqualData matcher compares two objects, it takes only object properties into
      // account and ignores methods.
      beforeEach(function() {
        this.addMatchers({
          toEqualData: function(expected) {
            return angular.equals(this.actual, expected);
          }
        });
      });

      beforeEach(function() {
        module('mean');
        module('mean.system');
        module('mean.products');
      });

      // Initialize the controller and a mock scope
      var ProductsController,
        scope,
        $httpBackend,
        $stateParams,
        $location;

      // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
      // This allows us to inject a service but then attach it to a variable
      // with the same name as the service.
      beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {

        scope = $rootScope.$new();

        ProductsController = $controller('ProductsController', {
          $scope: scope
        });

        $stateParams = _$stateParams_;

        $httpBackend = _$httpBackend_;

        $location = _$location_;

      }));

      it('$scope.find() should create an array with at least one product object ' +
        'fetched from XHR', function() {

          // test expected GET request
          $httpBackend.expectGET('products').respond([{
            title: 'An Product about MEAN',
            description: 'MEAN rocks!'
          }]);

          // run controller
          scope.find();
          $httpBackend.flush();

          // test scope value
          expect(scope.products).toEqualData([{
            title: 'An Product about MEAN',
            description: 'MEAN rocks!'
          }]);

        });

      it('$scope.findOne() should create an array with one product object fetched ' +
        'from XHR using a productId URL parameter', function() {
          // fixture URL parament
          $stateParams.productId = '525a8422f6d0f87f0e407a33';

          // fixture response object
          var testProductData = function() {
            return {
              title: 'An Product about MEAN',
              description: 'MEAN rocks!'
            };
          };

          // test expected GET request with response object
          $httpBackend.expectGET(/products\/([0-9a-fA-F]{24})$/).respond(testProductData());

          // run controller
          scope.findOne();
          $httpBackend.flush();

          // test scope value
          expect(scope.product).toEqualData(testProductData());

        });

      it('$scope.create() with valid form data should send a POST request ' +
        'with the form input values and then ' +
        'locate to new object URL', function() {

          // fixture expected POST data
          var postProductData = function() {
            return {
              title: 'An Product about MEAN',
              description: 'MEAN rocks!'
            };
          };

          // fixture expected response data
          var responseProductData = function() {
            return {
              _id: '525cf20451979dea2c000001',
              title: 'An Product about MEAN',
              description: 'MEAN rocks!'
            };
          };

          // fixture mock form input values
          scope.title = 'An Product about MEAN';
          scope.description = 'MEAN rocks!';

          // test post request is sent
          $httpBackend.expectPOST('products', postProductData()).respond(responseProductData());

          // Run controller
          scope.create(true);
          $httpBackend.flush();

          // test form input(s) are reset
          expect(scope.title).toEqual('');
          expect(scope.description).toEqual('');

          // test URL location to new object
          expect($location.path()).toBe('/products/' + responseProductData()._id);
        });

      it('$scope.update(true) should update a valid product', inject(function(Products) {

        // fixture rideshare
        var putProductData = function() {
          return {
            _id: '525a8422f6d0f87f0e407a33',
            title: 'An Product about MEAN',
            to: 'MEAN is great!'
          };
        };

        // mock product object from form
        var product = new Products(putProductData());

        // mock product in scope
        scope.product = product;

        // test PUT happens correctly
        $httpBackend.expectPUT(/products\/([0-9a-fA-F]{24})$/).respond();

        // testing the body data is out for now until an idea for testing the dynamic updated array value is figured out
        //$httpBackend.expectPUT(/products\/([0-9a-fA-F]{24})$/, putProductData()).respond();
        /*
                Error: Expected PUT /products\/([0-9a-fA-F]{24})$/ with different data
                EXPECTED: {"_id":"525a8422f6d0f87f0e407a33","title":"An Product about MEAN","to":"MEAN is great!"}
                GOT:      {"_id":"525a8422f6d0f87f0e407a33","title":"An Product about MEAN","to":"MEAN is great!","updated":[1383534772975]}
                */

        // run controller
        scope.update(true);
        $httpBackend.flush();

        // test URL location to new object
        expect($location.path()).toBe('/products/' + putProductData()._id);

      }));

      it('$scope.remove() should send a DELETE request with a valid productId ' +
        'and remove the product from the scope', inject(function(Products) {

          // fixture rideshare
          var product = new Products({
            _id: '525a8422f6d0f87f0e407a33'
          });

          // mock rideshares in scope
          scope.products = [];
          scope.products.push(product);

          // test expected rideshare DELETE request
          $httpBackend.expectDELETE(/products\/([0-9a-fA-F]{24})$/).respond(204);

          // run controller
          scope.remove(product);
          $httpBackend.flush();

          // test after successful delete URL location products list
          //expect($location.path()).toBe('/products');
          expect(scope.products.length).toBe(0);

        }));
    });
  });
}());
