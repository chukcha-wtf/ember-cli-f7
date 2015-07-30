import Ember from 'ember';
import layout from '../templates/components/f7-page-container';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: [':page', 'navbar:navbar-fixed', 'toolbar:toolbar-fixed'],
  navbar: undefined,
  toolbar: undefined,

  feature(name, selector) {
    if (this.get(name) === undefined) {
      this.set(name, Ember.$(selector).length > 0);
    }
  },

  didInsertElement() {
    // Setting properties in a didInsertElement makes rendering slow
    // This hook allows us to make it faster
    Ember.run.later(()=>{
      this.feature('navbar', '.navbar');
      this.feature('toolbar', '.toolbar');
    }, 0);
  }

});
