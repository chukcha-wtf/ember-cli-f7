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

## Components Included
- {{[f7-views](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/components/f7-views.js)}}
- {{[f7-view](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/components/f7-view.js)}}
- {{[f7-navbar](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/components/f7-navbar.js)}}
- {{[f7-page-container](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/components/f7-page-container.js)}}
- {{[f7-page-content](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/components/f7-page-content.js)}}
- {{[f7-panel](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/components/f7-panel.js)}}
- {{[f7-search-bar](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/components/f7-search-bar.js)}}
- {{[f7-swipeout](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/components/f7-swipeout.js)}}
- {{[f7-toggle-panel](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/components/f7-toggle-panel.js)}}
- {{[f7-toggle-sortable](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/components/f7-toggle-sortable.js)}}

## Mixins Included
- [f7-route](https://github.com/chukcha-wtf/ember-cli-f7/blob/master/addon/mixins/f7-route.js)

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
