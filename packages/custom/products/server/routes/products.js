'use strict';

var products = require('../controllers/products');

// Product authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.product.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

module.exports = function(Products, app, auth) {

  app.route('/products')
    .get(products.all)
    .post(auth.requiresLogin, products.create);
  app.route('/products/:productId')
    .get(products.show)
    .put(auth.requiresLogin, hasAuthorization, products.update)
    .delete(auth.requiresLogin, hasAuthorization, products.destroy);

  // Finish with setting up the productId param
  app.param('productId', products.product);
};
