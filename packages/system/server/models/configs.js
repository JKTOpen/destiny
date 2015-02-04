'use strict';
/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

/**
* Product Schema
*/
var ConfigSchema = new Schema({
  categoryList : [{
	  category: {
	    type: Schema.ObjectId,
	    ref: 'Productcategorylist'
	  }
  }],
  productsPerCategory: {
  	type: Number,
  	required: true
  }

});

mongoose.model('Configs', ConfigSchema);
