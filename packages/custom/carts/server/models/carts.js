'use strict';
/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

/**
* Cart Schema
*/
var CartSchema = new Schema({

  shipping: {
    type: Number,
    required: false,
    trim: true
  },
  tax: {
    type: Number,
    required: false,
    trim: true
  },
  taxRate: {
    type: Number,
    required: false,
    trim: true
  },
  user: {
    type: String,
    required: true,
    trim: true
  },
  items: [
  {
  	_id : {
      type:String,
      required: true,
      trim: true
    },
    _name: {
      type:String,
      required: true,
      trim: true
    },
    _price: {
      type:Number,
      required: true,
      trim: true
    },
    _quantity: {
      type:Number,
      required: false,
      trim: true
    },
    _data: {
      type: Schema.Types.Mixed,
      required : true
    }
  }]

}, { versionKey: false });

/**
* Statics
*/

CartSchema.statics.load = function(id, cb) {
this.findOne({
user: id
}).exec(cb);
};


mongoose.model('Cart', CartSchema);
