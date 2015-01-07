'use strict';

/**
 * Module dependencies.
 */
/*var mongoose = require('mongoose'),
  Order = mongoose.model('order'),*/
 // _ = require('lodash');


/**
 * Find product by id
 */
/*exports.product = function(req, res, next, id) {
  Product.load(id, function(err, product) {
    if (err) return next(err);
    if (!product) return next(new Error('Failed to load product ' + id));
    req.product = product;
    next();
  });
};*/

/**
 * Create an article
 */
exports.create = function(req, res) {
  /*var order = new Order(req.body);
  order.user = req.user;

  order.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the order'
      });
    }
    res.json(order);

  });*/
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

console.log('reached inside order controller method');


};  


/**
 * List of ALL Products Categories
 */

/*exports.productCategory = function(req, res) {
  Productcategorylist.find().exec(function(err, productCategoryLists) {
    
    if (err) {
      return res.json(500, {
        error: 'Cannot list the xyz'
      });
    }
    res.json(productCategoryLists);

  });
};*/




/**
 * List of ALL Queried Products 
 */
/*exports.categorizedProduct = function(req, res) {
  var titleString = new RegExp(req.query.keyword);
  var json = {
     category: req.params.categoryId,
     title: titleString
  };
  
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
}; */

