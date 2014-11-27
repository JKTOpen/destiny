'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Product Schema
 */
var ProductcategorylistSchema = new Schema({
  
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  }
});

mongoose.model('Productcategorylist', ProductcategorylistSchema);
