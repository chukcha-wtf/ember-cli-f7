import Ember from 'ember';
import layout from '../templates/components/f7-toggle-sortable';

export default Ember.Component.extend({
  layout: layout,
  sortable: false,
  title: Ember.computed('sortable', function(){
    return this.get('sortable') ? 'Done' : 'Sort';
  }),

  didInsertElement() {
    this.get('f7').initSortable();
  },

  observeSortable: Ember.observer('sortable', function(){
    if (this.get('sortable')) {
      Ember.run.later(()=>{
        this.get('f7').sortableOpen('.sortable');
      }, 10)
    } else {
      this.get('f7').sortableClose('.sortable');
    }
  }),

  actions: {
    toggleSort() {
      this.toggleProperty('sortable');
    }
  }
});
