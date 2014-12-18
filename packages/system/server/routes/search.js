'use strict';

module.exports = function(System, app, auth, database) {

	var search = require('../controllers/search');
 	app.route('/search').get(search.findProductsByTitle);

};