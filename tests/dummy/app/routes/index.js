import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.setProperties({
      items: Ember.A([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item)=>{
        return `Item ${item}`;
      }))
    });
  },

  actions: {
    refresh(deferred) {
      // simulate data fetching
      Ember.run.later(function(){
        deferred.resolve();
      }, 1000);
    },

    populateData(deferred) {
      let items = this.get('controller.items');
      Ember.run.later(function(){
        items.addObjects([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32].map((item)=>{
                            return `Item ${item}`;
                          }));
        deferred.resolve();
      }, 1000);
    },

    itemClicked(item) {
      this.get('f7').alert(`Clicked ${item}`);
    },

    deleteItem(item) {
      this.get('controller.items').removeObject(item);
    }
  },

  renderTemplate(){
    this.render();
    this.render('navbar-index', {
      outlet: 'navbar'
    });
  }
});