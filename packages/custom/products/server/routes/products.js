'use strict';

var products = require('../controllers/products');

// Product authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

module.exports = function(Products, app, auth) {

  app.route('/products')
    /*.get(products.productCategory)*/
    .get(products.all)
    .post(auth.requiresLogin, hasAuthorization, products.create);
  app.route('/products/:productId')
    .get(products.show)
    .put(auth.requiresLogin, hasAuthorization, products.update)
    .delete(auth.requiresLogin, hasAuthorization, products.destroy);
  app.route('/productCategoryList')
    .get(products.productCategory);
  app.route('/products/category/:categoryId')
    .get(products.categorizedProduct);

  // Finish with setting up the productId param
  app.param('productId', products.product);
};
