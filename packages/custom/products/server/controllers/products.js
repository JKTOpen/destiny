'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Product = mongoose.model('Product'),
  Productcategorylist = mongoose.model('Productcategorylist'),
  _ = require('lodash');


/**
 * Find product by id
 */
exports.product = function(req, res, next, id) {
  Product.load(id, function(err, product) {
    if (err) return next(err);
    if (!product) return next(new Error('Failed to load product ' + id));
    req.product = product;
    next();
  });
};

/**
 * Create an product
 */
exports.create = function(req, res) {
  var product = new Product(req.body);
    
  product.user = req.user;
  product.save(function(err) {
 
    if (err) {
      return res.json(500, {
        error: 'Cannot save the product'
      });
    }
    res.json(product);

  });
};

/**ProductCategoryList
 * Update an product
 */
exports.update = function(req, res) {
  var product = req.product;
  
  product = _.extend(product, req.body);
  product.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the product'
      });
    }
    res.json(product);

  });
};

/**
 * Delete an product
 */
exports.destroy = function(req, res) {
  var product = req.product;

  product.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the product'
      });
    }
    res.json(product);

  });
};

/**
 * Show an product
 */
exports.show = function(req, res) {
 // console.log(req.product);
  res.json(req.product);
};

/**
 * List of Products
 */
exports.all = function(req, res) {
Product.find().sort('-created').populate('user', 'name username').populate('category', 'name ').exec(function(err, products) {

if (err) {
return res.json(500, {
error: 'Cannot list the products'
});
}
res.json(products);

  });
};


exports.productCategory = function(req, res) {
  Productcategorylist.find().exec(function(err, productCategoryLists) {
    
    if (err) {
      return res.json(500, {
        error: 'Cannot list the xyz'
      });
    }
    res.json(productCategoryLists);

  });
};

exports.categorizedProduct = function(req, res) {
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
}; 
