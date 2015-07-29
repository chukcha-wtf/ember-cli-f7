import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.setProperties({
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item)=>{
        return `Item ${item}`;
      })
    });
  }
});