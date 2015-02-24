'use strict';

var mongoose = require('mongoose'), Configs = mongoose.model('Configs');

exports.getHomePageConfigsFromDB = function(req, res) {

	var nameString = new RegExp(req.query.name);
  	var json = {
    	name: nameString
  	};

	  Configs.find(json).exec(function(err, configs) {
    	if (err) {
      		return res.json(500, {
      		error: 'Cannot load the configs'
      		});
    	}
    	res.json(configs);
  	});
};
