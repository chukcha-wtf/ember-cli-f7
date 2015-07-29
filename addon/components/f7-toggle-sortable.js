import Ember from 'ember';
import layout from '../templates/components/f7-toggle-sortable';

export default Ember.Component.extend({
  layout: layout,
  sortable: false,
  title: Ember.computed('sortable', function(){
    return this.get('sortable') ? 'Done' : 'Sort';
  }),

  click() {
    this.toggleProperty('sortable');
  },

  observeSortable: Ember.observer('sortable', function(){
    if (this.get('sortable')) {
      this.get('f7').sortableOpen('.sortable');
    } else {
      this.get('f7').sortableClose('.sortable');
    }
  })
});
