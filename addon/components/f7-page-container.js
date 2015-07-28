import Ember from 'ember';
import layout from '../templates/components/f7-page-container';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: [':page', 'navbar:navbar-through', 'toolbar:toolbar-through'],

  feature(name, selector) {
    if (this.get(name) === undefined) {
      this.set(name, this.$(selector).length > 0);
    }
  },

  didInsertElement() {
    // Setting properties in a didInsertElement makes rendering slow
    // This hook allows us to make it faster
    Ember.run.later(()=>{
      this.feature('navbar', '.navbar');
      this.feature('toolbar', '.toolbar');
      this.feature('searchBar', '.searchbar');
    },1);
  },

  initSearchBar: Ember.observer('searchBar', function(){
    if (this.get('searchBar')) {
      this.get('f7').initSearchBar(this.$());
    }
  })
});
