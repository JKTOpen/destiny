'use strict';

// The Package is past automatically as first parameter
module.exports = function(Carts, app, auth, database) {

  app.get('/carts/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/carts/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/carts/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/carts/example/render', function(req, res, next) {
    Carts.render('index', {
      package: 'carts'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
