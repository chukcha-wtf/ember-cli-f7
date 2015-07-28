/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-f7',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/css/ember-cli-f7.css');

    var bowerDirectory = app.bowerDirectory;

    // TODO: find a way to load OS dependent css
    if (false) {
      app.import(bowerDirectory + '/framework7/dist/css/framework7.material.css');
      app.import(bowerDirectory + '/framework7/dist/css/framework7.material.colors.css');
    } else {
      app.import(bowerDirectory + '/framework7/dist/css/framework7.ios.css');
      app.import(bowerDirectory + '/framework7/dist/css/framework7.ios.colors.css');
    }

    app.import(bowerDirectory + '/framework7/dist/js/framework7.js');
    app.import(bowerDirectory + '/framework7/dist/js/framework7.js.map', {
      destDir: 'assets'
    });
  },

  isDevelopingAddon: function() {
    return true;
  }
};
