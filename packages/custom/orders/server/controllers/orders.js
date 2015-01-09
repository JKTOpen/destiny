'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Order = mongoose.model('Order'),
  
  _ = require('lodash');




/**
 * Create an order
 */
exports.create = function(req, res) {
  var order = new Order(req.body.order);
    
  order.user = req.user;
  console.log(order);
 //console.log(order.items);
 //console.log(req.user);
 console.log('diff');
 //console.log(req.body.order.items);
 //console.log('testformat');
 //console.log(order.order);
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
 * List of Products
 */
exports.all = function(req, res) {
/*Product.find().sort('-created').populate('user', 'name username').populate('category', 'name ').exec(function(err, products) {

if (err) {
return res.json(500, {
error: 'Cannot list the products'
});
}
res.json(products);

  });*/
};