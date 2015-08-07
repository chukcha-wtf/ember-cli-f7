import Ember from 'ember';
import layout from '../templates/components/f7-panel';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: [':panel', 'positionClass', 'displayClass'],
  postion: 'left', //support 'right' and 'left' directions
  display: 'reveal', //supports 'cover' and 'reveal' values
  
  positionClass: Ember.computed('postion', function(){
    return `panel-${this.get('postion')}`;
  }),
  displayClass: Ember.computed('display', function(){
    return `panel-${this.get('display')}`;
  }),

  didInsertElement() {
    if (!Ember.$('.panel-overlay').length) {
      this.addOverlay();
    }
  },

  addOverlay() {
    this.$().before('<div class="panel-overlay"></div>');
  }
});
