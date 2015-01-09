'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Order Schema
 */
var OrderSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
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

  items:[
  {
   id: {
    type: String,
    required: false,
    trim: true
   },
   name: {
    type: String,
    required: false,
    trim: true
   },
   price: {
    type: Number,
    required: false,
    trim: true
   },
   quantity: {
    type: Number,
    required: false,
    trim: true
   },
   data:{
    __v: {
      type: Number,
      required: false,
      trim: true
    },
    _id: {
      type: String,
      required: false,
      trim: true
    },
  category: {
    _id: {
      type: String,
      required: false,
      trim: true
    },
  name: {
    type: String,
    required: false,
    trim: true
  }
 },
 color: {
    type: String,
    required: false,
    trim: true
 },
 description: {
    type: String,
    required: false,
    trim: true
 },
 price: {
    type: Number,
    required: false,
    trim: true
 },
 tag: {
    type: String,
    required: false,
    trim: true
 },
 title: {
    type: String,
    required: false,
    trim: true
 },
 user: {
  _id: {
    type: String,
    required: false,
    trim: true
 },
 name: {
    type: String,
    required: false,
    trim: true
 },
 username: {
    type: String,
    required: false,
    trim: true
 }
},
images: {
 name: {
    type: String,
    required: false,
    trim: true
 },
 src: {
    type: String,
    required: false,
    trim: true
 },
 size: {
    type: String,
    required: false,
    trim: true
 },
 type: {
    type: String,
    required: false,
    trim: true
 },
 created: {
    type: String,
    required: false,
    trim: true
 }    

},
created: {
    type: String,
    required: false,
    trim: true
}
}
}]  
});

/**
 * Validations
 */
/*ArticleSchema.path('title').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

ArticleSchema.path('content').validate(function(content) {
  return !!content;
}, 'Content cannot be blank');*/

/**
 * Statics
 */
/*ArticleSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};*/

mongoose.model('Order', OrderSchema);
