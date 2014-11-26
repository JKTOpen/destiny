'use strict';

(function() {
  // Login Controller Spec
  describe('MEAN controllers', function() {
    describe('LoginCtrl', function() {
      beforeEach(function() {
        jasmine.addMatchers({
          toEqualData: function() {
            return {
              compare: function(actual, expected) {
                return {
                  pass: angular.equals(actual, expected)
                };
              }
            };
          }
        });
      });

      beforeEach(function() {
        module('mean');
        module('mean.system');
        module('mean.users');
      });

      var LoginCtrl,
        scope,
        $rootScope,
        $httpBackend,
        $location;

      beforeEach(inject(function($controller, _$rootScope_, _$location_, _$httpBackend_) {

        scope = _$rootScope_.$new();
        $rootScope = _$rootScope_;

        LoginCtrl = $controller('LoginCtrl', {
          $scope: scope,
          $rootScope: _$rootScope_
        });

        $httpBackend = _$httpBackend_;

        $location = _$location_;

      }));

      afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

      it('should login with a correct user and password', function() {

        spyOn($rootScope, '$emit');
        // test expected GET request
        $httpBackend.when('POST', '/login').respond(200, {
          user: 'Fred'
        });
        scope.login();
        $httpBackend.flush();
        // test scope value
        expect($rootScope.user).toEqual('Fred');
        expect($rootScope.$emit).toHaveBeenCalledWith('loggedin');
        expect($location.url()).toEqual('/');
      });



      it('should fail to log in ', function() {
        $httpBackend.expectPOST('/login').respond(400, 'Authentication failed');
        scope.login();
        $httpBackend.flush();
        // test scope value
        expect(scope.loginerror).toEqual('Authentication failed.');

      });
    });

    /*describe('ProfileController', function() {
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
        module('mean.users');
      });

      var ProfileController,
        scope,
        $httpBackend,
        $stateParams,
        $location;        

      beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {

        scope = $rootScope.$new();

        ProfileController = $controller('ProfileController', {
          $scope: scope
        });

        $stateParams = _$stateParams_;

        $httpBackend = _$httpBackend_;

        $location = _$location_;        

      }));


      it('should have the same user as rootScope', function() {

        // test expected GET request
        $httpBackend.expectGET('/users/me').respond(200,{
          user: 'Fred'
        });
        scope.viewProfile();
        $httpBackend.flush();
        // test scope value
        expect(scope.profileUser).toEqualData({ user: 'Fred' });
      });

      it('$scope.update(true) should update a valid user', inject(function(MeanUser) {

        var putUserData = function() {
            return {
              
  _id : '54364f1e8575da8b299f53a7',
  email : 'rishi.kesarwani@jktech.com',
  hashed_password : 'U1ROBEN5KyfYilSkW9trdM31Auj//32vPB4/m2zY6qIjDURAcGN/ntzeF1VKU76YUOb7JRmai/EDzbyA+wTZDw==',
  name : 'Rishi',
  provider : 'local',
  roles : [
    'authenticated'
  ],
  salt : 'a0u5O5Snq1aW8a7iPOLj5Q==',
  username : 'Rishi'

            };
          };

  // mock product object from form
        var user = new MeanUser(putUserData());          
       
        scope.profileUser = user ; 
      


        // test expected GET request
        //$httpBackend.expectPUT('/users/54364f1e8575da8b299f53a7', scope.user).respond();
          
    
        $httpBackend.expectPUT(/users\/([0-9a-fA-F]{24})$/).respond();

        scope.update(true);
        $httpBackend.flush();
        // test scope value
        //expect(scope.user).toEqualData({ user : 'nitish'});
        expect($location.path()).toBe('/profile');
        
      }));

    });
*/
    describe('RegisterCtrl', function() {
      beforeEach(function() {
        jasmine.addMatchers({
          toEqualData: function() {
            return {
              compare: function(actual, expected) {
                return {
                  pass: angular.equals(actual, expected)
                };
              }
            };
          }
        });
      });

      beforeEach(function() {
        module('mean');
        module('mean.system');
        module('mean.users');
      });

      var RegisterCtrl,
        scope,
        $rootScope,
        $httpBackend,
        $location;

      beforeEach(inject(function($controller, _$rootScope_, _$location_, _$httpBackend_) {

        scope = _$rootScope_.$new();
        $rootScope = _$rootScope_;

        RegisterCtrl = $controller('RegisterCtrl', {
          $scope: scope,
          $rootScope: _$rootScope_
        });

        $httpBackend = _$httpBackend_;

        $location = _$location_;

      }));

      afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

      it('should register with correct data', function() {

        spyOn($rootScope, '$emit');
        // test expected GET request
        scope.user.name = 'Fred';
        $httpBackend.when('POST', '/register').respond(200, 'Fred');
        scope.register();
        $httpBackend.flush();
        // test scope value
        expect($rootScope.user.name).toBe('Fred');
        expect(scope.registerError).toEqual(0);
        expect($rootScope.$emit).toHaveBeenCalledWith('loggedin');
        expect($location.url()).toBe('/');
      });



      it('should fail to register with duplicate Username', function() {
        $httpBackend.when('POST', '/register').respond(400, 'Username already taken');
        scope.register();
        $httpBackend.flush();
        // test scope value
        expect(scope.usernameError).toBe('Username already taken');
        expect(scope.registerError).toBe(null);
      });

      it('should fail to register with non-matching passwords', function() {
        $httpBackend.when('POST', '/register').respond(400, 'Password mismatch');
        scope.register();
        $httpBackend.flush();
        // test scope value
        expect(scope.usernameError).toBe(null);
        expect(scope.registerError).toBe('Password mismatch');
      });
    });

    describe('ForgotPasswordCtrl', function() {
      beforeEach(function() {
        jasmine.addMatchers({
          toEqualData: function() {
            return {
              compare: function(actual, expected) {
                return {
                  pass: angular.equals(actual, expected)
                };
              }
            };
          }
        });
      });

      beforeEach(function() {
        module('mean');
        module('mean.system');
        module('mean.users');
      });

      var ForgotPasswordCtrl,
          scope,
          $rootScope,
          $httpBackend ;

      beforeEach(inject(function($controller, _$rootScope_, _$httpBackend_) {

        scope = _$rootScope_.$new();
        $rootScope = _$rootScope_;

        ForgotPasswordCtrl = $controller('ForgotPasswordCtrl', {
          $scope: scope,
          $rootScope: _$rootScope_
        });

        $httpBackend = _$httpBackend_;

      }));

      afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

      it('should display success response on success', function() {
        scope.user.email = 'test@test.com';
        $httpBackend.when('POST', '/forgot-password').respond(200,'Mail successfully sent');
        scope.forgotpassword();
        $httpBackend.flush();

        expect(scope.response).toEqual('Mail successfully sent');

      });
      it('should display error response on failure', function() {
        scope.user.email = 'test@test.com';
        $httpBackend.when('POST', '/forgot-password').respond(400,'User does not exist');
        scope.forgotpassword();
        $httpBackend.flush();

        expect(scope.response).toEqual('User does not exist');

      });

    });
  });


}());
