import Ember from 'ember';
import layout from '../templates/components/f7-swipeout';

export default Ember.Component.extend({
  layout: layout,
  classNames: 'swipeout',
  tagName: 'li',

  didInsertElement() {
    this.get('f7').initSwipeout(this.$());
  },

  willDestroyElement() {
    var parent = this.$().parent();
    var index = parent.children().index(this.$());
    var clone = this.$().clone();
    clone.find('script').remove();
    Ember.run.scheduleOnce('afterRender', () => {
      var elem = parent.children()[index];
      if(elem) {
        $(parent.children()[index]).before(clone);
      } else {
        parent.append(clone);
      }
      this.get('f7').swipeoutDelete(clone);
    });
  }
});
