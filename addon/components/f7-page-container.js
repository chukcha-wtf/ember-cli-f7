import Ember from 'ember';
import layout from '../templates/components/f7-page-container';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: [':page', 'navbarClass', 'toolbarClass'],
  navbar: undefined,
  toolbar: undefined,

  navbarClass: Ember.computed('navbar', 'f7.materialTheme', function(){
    if (!Ember.isEmpty(this.get('navbar'))) {
      return this.get('f7.materialTheme') ? 'navbar-fixed' : 'navbar-through';
    }
  }),

  toolbarClass: Ember.computed('toolbar', 'f7.materialTheme', function(){
    if (!Ember.isEmpty(this.get('toolbar'))) {
      return 'toolbar-through';
    }
  }),

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

    if (this.get('f7.iosTheme')) {
      this.addStatusOverlay();
    }
  },

  addStatusOverlay() {
    Ember.$('body').prepend('<div class="statusbar-overlay"></div>');
  }

});
