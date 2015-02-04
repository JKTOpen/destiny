'use strict';

module.exports = function(System, app, auth, database) {

	var configs = require('../controllers/configs');
 	app.route('/configs').get(configs.getHomePageConfigsFromDB);

};