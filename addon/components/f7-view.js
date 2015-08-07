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
    Ember.run.schedule('actions', () => {
      if (this.get('name') === 'main') {
        const viewLeft = this.$().siblings('.view-left').length > 0;
        const viewRight = this.$().siblings('.view-left').length > 0;
        
        // add class for multiple views
        if (viewLeft && viewRight) {
          this.set('multiViewsClass', 'view-main-with-right-and-left');
        } else if (viewRight) {
          this.set('multiViewsClass', 'view-main-with-right');
        } else if (viewLeft) {
          this.set('multiViewsClass', 'view-main-with-left');
        }


        const degradationViewLeft = this.$().siblings('.panel').find('.view-left').length > 0;
        const degradationViewRight = this.$().siblings('.panel').find('.view-right').length > 0;

        // add class for multiple views with panel degradation
        if (degradationViewLeft && degradationViewRight) {
          this.set('multiViewsClass', 'degradation-view-main-with-right-and-left');
        } else if (degradationViewRight) {
          this.set('multiViewsClass', 'degradation-view-main-with-right');
        } else if (degradationViewLeft) {
          this.set('multiViewsClass', 'degradation-view-main-with-left');
        }
      }
    });
  }
});
