'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Carts = new Module('carts');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Carts.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Carts.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Carts.menus.add({
    title: 'carts example page',
    link: 'carts example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Carts.aggregateAsset('css', 'carts.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Carts.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Carts.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Carts.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Carts;
});
