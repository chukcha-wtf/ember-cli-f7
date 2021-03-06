import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('virtual', {path: 'virtual'});
  this.route('items.show', {path: 'items/:id'});
});

export default Router;
