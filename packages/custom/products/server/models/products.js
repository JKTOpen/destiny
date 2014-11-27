'use strict';
/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

/**
* Product Schema
*/
var ProductSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  tag: {
    type: String,
    required: false,
    trim: true
  },
  color: {
    type: String,
    required: false,
    trim: true
  },
  category: {
    type: Schema.ObjectId,
    ref: 'Productcategorylist'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  images: {
    name: {
      type:String,
      required: false,
      trim: true  
    },
    src: {
      type:String,
      required: false,
      trim: true  
    },
    size: {
      type:String,
      required: false,
      trim: true  
    },
    type:  {
      type:String,
      required: false,
      trim: true  
    },
    created: {
      type:Date,
      required: false,
      trim: true  
    }
  }

});

/**
* Validations
*/
ProductSchema.path('title').validate(function(title) {
return !!title;
}, 'Title cannot be blank');
ProductSchema.path('description').validate(function(description) {
return !!description;
}, 'Description cannot be blank');

/**
* Statics
*/
ProductSchema.statics.load = function(id, cb) {
this.findOne({
_id: id
}).populate('user', 'name username').populate('category', 'name ').exec(cb);

};

mongoose.model('Product', ProductSchema);
