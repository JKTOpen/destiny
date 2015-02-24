'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
Cart = mongoose.model('Cart'),
  _ = require('lodash');

/**
 * Find product by id
 */
exports.cart = function(req, res, next, id) {
  Cart.load(id, function(err, cart) {
    if (err) return next(err);
    if (!cart) return next(new Error('Failed to load cart ' + id));
    req.cart = cart;
    next();
  });
};

/**
 * Show an cart
 */
exports.showCart = function(req, res) {
	res.json(req.cart);
};

/**
 * Save/Update cart
 */
exports.updateCart = function(req, res) {
  var cart = req.cart;
  console.log(req.cart);
  console.log(req.body);
  cart = _.extend(cart, req.body);
  console.log(cart);
  cart.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the cart'
      });
    }
    res.json(cart);

  });
};

/**
 * Create an cart
 */
exports.createCart = function(req, res) {
  var cart = new Cart(req.body);

  cart.user= req.user._id;
  cart.save(function(err) {

    if (err) {
    	console.log(err);
      return res.json(500, {
        error: 'Cannot save the cart'
      });
    }
    res.json(cart);

  });
};


/**
 * Delete an product
 */
exports.destroy = function(req, res) {
  var cart = req.cart;
console.log('destroy.................');
console.log(req.cart);
  cart.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the cart'
      });
    }
    res.json(cart);

  });
};
