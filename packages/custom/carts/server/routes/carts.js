'use strict';

var carts = require('../controllers/carts');

// Cart authorization helpers
var hasAuthorization = function(req, res, next) {
  console.log(req.user !== req.cart.user);
  if (req.user !== req.cart.user) {
    return res.send(401, 'User is not authorized');
  }
  next();
};


// The Package is past automatically as first parameter
module.exports = function(Carts, app, auth, database) {
  app.route('/carts/:cartId')
    .get(auth.requiresLogin, hasAuthorization, carts.showCart)
    .put(auth.requiresLogin, hasAuthorization, carts.updateCart);
  app.route('/carts')
    .post(auth.requiresLogin, carts.createCart);
  
  // Finish with setting up the cartId param
  app.param('cartId', carts.cart);
  
};
