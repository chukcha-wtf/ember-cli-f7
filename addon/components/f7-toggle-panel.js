import Ember from 'ember';
import layout from '../templates/components/f7-toggle-panel';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'toggle-panel',

  click() {
    this.get('f7').openPanel(this.get('attrs.direction'));
  },

  didInsertElement() {
    if (Ember.$(`.panel-${this.get('attrs.direction')}`).length === 0) {
      throw new Error(`You need to define a panel .panel-${this.get('attrs.direction')}`);
    }

    if (Ember.$(`.panel-${this.get('attrs.direction')}`).length > 1) {
      throw new Error(`There is more than one panel with class .panel-${this.get('attrs.direction')}`);
    }

    this.get('f7').initSwipePanels(this.get('attrs.direction'));
  }
});
