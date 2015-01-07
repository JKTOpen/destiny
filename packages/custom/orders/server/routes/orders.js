'use strict';

var orders = require('../controllers/orders');

// Article authorization helpers
/*var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.order.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};*/

module.exports = function(Orders, app, auth) {

  app.route('/orders')
    .get(orders.all)
    .post(auth.requiresLogin, orders.create);
  /*app.route('/articles/:articleId')
    .get(articles.show)
    .put(auth.requiresLogin, hasAuthorization, articles.update)
    .delete(auth.requiresLogin, hasAuthorization, articles.destroy);*/

  // Finish with setting up the articleId param
  //app.param('articleId', articles.article);
};
