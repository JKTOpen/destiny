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
  subTotal: {
    type: Number,
    required: false,
    trim: true
  },
  totalCost: {
    type: Number,
    required: false,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  items: [
  {
  	id : {
      type:String,
      required: true,
      trim: true  
    }, 
    name: {
      type:String,
      required: true,
      trim: true  
    },
    price: {
      type:Number,
      required: true,
      trim: true  
    },
    quantity: {
      type:Number,
      required: false,
      trim: true  
    },
    data: {
      type: Schema.Types.Mixed, 
      required : true
    },
    total: {
      type:Number,
      required: true,
      trim: true  
    }
  }]

});

/**
* Statics
*/

CartSchema.statics.load = function(id, cb) {
this.findOne({
_id: id
}).exec(cb);

};


mongoose.model('Cart', CartSchema);
