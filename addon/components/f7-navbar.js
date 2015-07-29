import Ember from 'ember';
import layout from '../templates/components/f7-navbar';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['navbar'],

  didInsertElement(){
    this.animate();
  },

  animate(){
    this.$('.center').css('opacity', 0);
    Ember.run.later(()=>{
      this.get('f7').sizeNavbars();
      this.$('.center').css('opacity', 1);
    }, 0);
  }
});
