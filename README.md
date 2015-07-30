# Ember-cli-f7

Ember CLI Framework7 addon

## Installation

* `npm install --save-dev ember-cli-f7`
* `ember g ember-cli-f7`

## Important!
You'll need to add `data:` attribute to to your `config/environment.js` file. This will allow svg icons been properly displayed.

```
  <!-- config/environment.js -->
  contentSecurityPolicy: {
    'img-src': "'self' data:",
  }
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
