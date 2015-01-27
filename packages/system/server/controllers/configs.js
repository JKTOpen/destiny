'use strict';

var mongoose = require('mongoose'), Configs = mongoose.model('Configs');

exports.getHomePageConfigsFromDB = function(req, res) {
	Configs.find().exec(function(err, configs) {
    	if (err) {
      		return res.json(500, {
      		error: 'Cannot load the configs'
      		});
    	}
    	res.json(configs);
  	});
};
