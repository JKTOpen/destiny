'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Order = mongoose.model('Order');
 /* _ = require('lodash');*/

/**
 * Find order by id
 */
exports.order = function(req, res, next, id) {
  Order.load(id, function(err, order) {
    if (err) return next(err);
      if (!order) return next(new Error('Failed to load article ' + id));
        req.order = order;
        next();
  });
};

/**
 * Create an order
 */
exports.create = function(req, res) {
  var order = new Order(req.body);
  order.user = req.user;
  order.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the order'
      });
    }
    res.json(order);
  });
};

/**
 * List of Orders
 */
exports.all = function(req, res) {
  var currentuser = {
     user: req.user
  };
  Order.find(currentuser).sort('-created').populate('user', ' name username').exec(function(err, orders) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the orders'
      });
    }
    res.json(orders);
  });
};

/**
 * Show an order
 */
exports.show = function(req, res) {
  res.json(req.order);
};
