import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterList(){
      this.get('virtualList').filterItems([12, 14, 8, 16, 24, 25]);
    },

    resetFilter(){
      this.get('virtualList').resetFilter();
    }
  }
});