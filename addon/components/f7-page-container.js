import Ember from 'ember';
import layout from '../templates/components/f7-page-container';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: [':page', 'navbarClass', 'toolbarClass'],
  navbar: true,
  toolbar: true,

  navbarClass: Ember.computed('navbar', 'f7.materialTheme', function(){
    if (this.get('navbar')) {
      return this.get('f7.materialTheme') ? 'navbar-fixed' : 'navbar-through';
    } else {
      return '';
    }
  }),

  toolbarClass: Ember.computed('toolbar', 'f7.materialTheme', function(){
    if (this.get('toolbar')) {
      return this.get('f7.materialTheme') ? 'navbar-fixed' : 'navbar-through';
    } else {
      return '';
    }
  }),

  feature(name, selector) {
    if (!this.get(name)) {
      this.set(name, this.$().parents('.view').find(selector).length > 0);
    }
  },

  didInsertElement() {
    Ember.run.next(()=>{
      this.feature('navbar', '.navbar');
      this.feature('toolbar', '.toolbar');
    });

    if (this.get('f7.iosTheme') && Ember.$('.statusbar-overlay').length === 0) {
      this.addStatusOverlay();
    }
  },

  addStatusOverlay() {
    Ember.$('body').prepend('<div class="statusbar-overlay"></div>');
  }

});
