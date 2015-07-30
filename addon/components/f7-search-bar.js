import Ember from 'ember';
import layout from '../templates/components/f7-search-bar';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: [':searchbar-holder'],
  searchList: '.list-block-search',
  placeholder: 'Searching',
  searchIn: ".item-title", 
  cancelText: "done",
  ignore: '.searchbar-ignore',
  removeDiacritics: false,
  hideDividers: true,
  hideGroups: true,

  query: '',

  didInsertElement(){
    const searchList = Ember.$(this.get('attrs.searchList'));

    if (searchList.length < 1) {
      throw new Error('There is no search list available');
    }

    if (searchList.length > 1) {
      throw new Error('There is more than one search list available within the searchbar component');

    }

    this.addOverlay();
    this.get('f7').initSearchbar(this.$());
  },

  onQueryChanges: Ember.observer('query', function(){
    this.sendAction('action', this.get('query'));
  }),

  addOverlay() {
    this.$().after('<div class="searchbar-overlay"></div>');
  }
});
