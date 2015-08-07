import Ember from 'ember';
import layout from '../templates/components/f7-views';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: [':views', 'viewsCountClass'],
  viewsCount: '1', // supports 1, 2 and 3 possible views

  viewsCountClass: Ember.computed('viewsCount', function(){
    return `views-${this.get('viewsCount')}`;
  })

});
