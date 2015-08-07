import Ember from 'ember';
import layout from '../templates/components/f7-view';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: [':view', 'viewClass', 'multiViewsClass'],
  name: 'main', // supports 'main', 'left' and 'right' names
  
  viewClass: Ember.computed('name', function(){
    return `view-${this.get('name')}`;
  }),

  didInsertElement() {
    this.get('f7').addView(`.${this.get('viewClass')}`);
  },

  didRender() {
    console.log(`Rendered ${this.get('name')}`);
    Ember.run.schedule('actions', () => {
      if (this.get('name') === 'main') {
        if (this.$().siblings('.view-right').length > 0 && this.$().siblings('.view-left').length > 0) {
          this.set('multiViewsClass', 'view-main-with-right-and-left');
        } else if (this.$().siblings('.view-right').length > 0) {
          this.set('multiViewsClass', 'view-main-with-right');
        } else if (this.$().siblings('.view-left').length > 0) {
          this.set('multiViewsClass', 'view-main-with-left');
        }
      }
    });
  }
});
