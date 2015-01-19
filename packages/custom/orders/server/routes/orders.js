'use strict';

var orders = require('../controllers/orders');

// Order authorization helpers
var hasAuthorization = function(req, res, next) {
  if (req.order.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

module.exports = function(Orders, app, auth) {

  app.route('/orders')
    .get(auth.requiresLogin, orders.all)
    .post(auth.requiresLogin, orders.create);
  app.route('/orders/:orderId')
    .get(auth.requiresLogin, hasAuthorization, orders.show);
    
  // Finish with setting up the articleId param
  app.param('orderId', orders.order);
};
