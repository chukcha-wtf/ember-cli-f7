/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-f7',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/css/ember-cli-f7.css');

    var bowerDirectory = app.bowerDirectory;
    var config = app.project.config(process.env.EMBER_ENV || 'development')['framework7'];

    if (!config) {
      config = {
        theme: 'ios'
      };
    }

    if (!config.theme) {
      config.theme = 'ios';
    }

    app.import({
      development: bowerDirectory + '/framework7/dist/css/framework7.' + config.theme + '.css',
      production: bowerDirectory + '/framework7/dist/css/framework7.' + config.theme + '.min.css'
    });
    app.import({
      development: bowerDirectory + '/framework7/dist/css/framework7.' + config.theme + '.colors.css',
      production: bowerDirectory + '/framework7/dist/css/framework7.' + config.theme + '.colors.min.css'
    });

    app.import({
      development: bowerDirectory + '/framework7/dist/js/framework7.js',
      production: bowerDirectory + '/framework7/dist/js/framework7.min.js',
    });
    app.import({
      development: bowerDirectory + '/framework7/dist/js/framework7.js.map', 
      production: bowerDirectory + '/framework7/dist/js/framework7.min.js.map', 
      destDir: 'assets'
    });
  },

  isDevelopingAddon: function() {
    return true;
  }
};
