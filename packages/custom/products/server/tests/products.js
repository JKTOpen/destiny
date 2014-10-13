'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Product = mongoose.model('Product');

/**
 * Globals
 */
var user;
var product;

/**
 * Test Suites
 */
describe('<Unit Test>', function() {
  describe('Model Product:', function() {
    beforeEach(function(done) {
      user = new User({
        name: 'Full name',
        email: 'test@test.com',
        username: 'user',
        password: 'password'
      });

      user.save(function() {
        product = new Product({
          title: 'Product Title',
          description: 'Product Description',
          tag: 'Product Tag',
          color: 'Product Color',
          category: 'Product Category',
          user: user
        });

        done();
      });
    });

    describe('Method Save', function() {
      it('should be able to save without problems', function(done) {
        return product.save(function(err) {
          should.not.exist(err);
          product.title.should.equal('Product Title');
          product.description.should.equal('Product Description');
          product.tag.should.equal('Product Tag');
          product.color.should.equal('Product Color');
          product.category.should.equal('Product Category');
          product.user.should.not.have.length(0);
          product.created.should.not.have.length(0);
          done();
        });
      });

      it('should be able to save without problems when try to save without tag, color & category', function(done) {
        product.tag = '';
        product.color = '';
        product.category = '';

        return product.save(function(err) {
          should.not.exist(err);
          product.title.should.equal('Product Title');
          product.description.should.equal('Product Description');
          product.tag.should.equal('');
          product.color.should.equal('');
          product.category.should.equal('');
          product.user.should.not.have.length(0);
          product.created.should.not.have.length(0);
          done();
        });
      });

      it('should be able to show an error when try to save without title', function(done) {
        product.title = '';

        return product.save(function(err) {
          should.exist(err);
          done();
        });
      });

      it('should be able to show an error when try to save without description', function(done) {
        product.description = '';

        return product.save(function(err) {
          should.exist(err);
          done();
        });
      });

      it('should be able to show an error when try to save without user', function(done) {
        product.user = {};

        return product.save(function(err) {
          should.exist(err);
          done();
        });
      });

    });

    afterEach(function(done) {
      product.remove();
      user.remove();
      done();
    });
  });
});
