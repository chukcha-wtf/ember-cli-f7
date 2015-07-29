import Ember from 'ember';
import layout from '../templates/components/f7-search-bar';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: [':searchbar-holder'],
  searchList: '.list-block-search',
  searchIn: '.item-title',
  placeholder: 'Search',
  cancelText: 'cancel',
  query: '',

  didInsertElement(){
    const searchList = Ember.$(this.get('searchList'));

    if (searchList.length < 1) {
      throw new Error('There is no search list available within the searchbar component');
    }

    if (searchList.length > 1) {
      throw new Error('There is more than one search list available within the searchbar component');

    }

    this.get('f7').initSearchbar(this.$('.searchbar'));
    this.addOverlay();
  },

  onQueryChanges: Ember.observer('query', function(){
    this.sendAction('action', this.get('query'));
  }),

  addOverlay() {
    this.$().after('<div class="searchbar-overlay"></div>');
  }
});
