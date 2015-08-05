# Ember-cli-f7

Ember CLI Framework7 addon

## Installation

* `npm install --save-dev ember-cli-f7`
* `ember g ember-cli-f7`

## Theme configuration
At the moment Framework7 provides styles for **material** and **iOs** themes.
You'll also get handy helpers like `currentDevice`, `isAndroid`, `isOs`, `matherialTheme` and `iosTheme` to use in your templates.

By default it'll use **ios** theme, you can change settings in your `config/enviroment.js` file:

```javascript
// config/environment.js
/* jshint node: true */
module.exports = function(environment) {
  var ENV = {
    framework7: {
      theme: 'material' // supported themes 'ios' and 'material'
    }
  };

  return ENV;
};
```

## Important!
You'll need to add `data:` attribute to to your `config/environment.js` file. This will allow svg icons been properly displayed.

```javascript
  // config/environment.js
  contentSecurityPolicy: {
    'img-src': "'self' data:",
  }
```

# Dependency Docs

-  [ember-cli](http://ember-cli.com)
-  [framework7](http://www.idangero.us/framework7)
-  [liquid-fire](http://ef4.github.io/liquid-fire/)

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
