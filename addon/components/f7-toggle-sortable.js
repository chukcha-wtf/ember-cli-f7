import Ember from 'ember';
import layout from '../templates/components/f7-toggle-sortable';

export default Ember.Component.extend({
  layout: layout,
  sortable: false,
  sortableOpen: 'Sort',
  sortableClose: 'Done',
  title: Ember.computed('sortable', function(){
    return this.get('sortable') ? this.get('sortableClose') : this.get('sortableOpen');
  }),

  didInsertElement() {
    this.get('f7').initSortable();

    // Callback on sort
    // Pass sortable item html to action

    Ember.$(this.get('itemSelector')).on('sort', (e)=>{
      const target = e.target;
      this.sendAction('action', target);
    });
  },

  observeSortable: Ember.observer('sortable', function(){
    if (this.get('sortable')) {
      this.get('f7').sortableOpen('.sortable');
    } else {
      this.get('f7').sortableClose('.sortable');
    }
  }),

  actions: {
    toggleSort() {
      this.toggleProperty('sortable');
    }
  },

  willDestroyElement() {
    Ember.$(this.get('itemSelector')).off('sortable');
  }
});
