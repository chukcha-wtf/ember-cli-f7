import Ember from 'ember';
import layout from '../templates/components/f7-toggle-panel';

export default Ember.Component.extend({
  layout: layout,

  click() {
    this.get('f7').openPanel(this.get('attrs.direction'));
  }
});
