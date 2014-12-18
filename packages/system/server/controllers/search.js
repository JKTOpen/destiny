'use strict';

var mongoose = require('mongoose'), Product = mongoose.model('Product');

exports.findProductsByTitle = function(req, res) {
	console.log('IN here');
	var titleString = new RegExp(req.query.keyword);
  	console.log(req.query.keyword);
  	var json = {
    	title: titleString
  	};
  console.log(json);
  
  Product.find(json).sort('-created')
   .populate('user', 'name username')
   .populate('category', 'name')
   .exec(function(err, products) {
    if (err) {
      return res.json(500, {
      error: 'Cannot list the products'
      });
    }
      res.json(products);
   });  
};
