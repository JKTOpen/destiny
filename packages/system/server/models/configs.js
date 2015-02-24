'use strict';
/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

/**
* Config Schema
*/
var ConfigSchema = new Schema({
  name : {
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: Schema.Types.Mixed,
    required : true
  }
});

mongoose.model('Configs', ConfigSchema);
