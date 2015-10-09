import Ember from 'ember';
import F7Route from 'ember-cli-f7/mixins/f7-route';

export default Ember.Route.extend(F7Route, {
  model() {
    const items = Ember.A([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item)=>{
                    return `Item ${item}`;
                  }));

    return new Ember.RSVP.Promise((resolve)=>{
      Ember.run.later(()=>{
        resolve(items);
      }, 400);
    });
  },

  setupController(controller, model) {
    controller.setProperties({
      items: model
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
    },

    goTo(item) {
      const id = parseInt(item.replace("Item ", ""));
      this.transitionTo('items.show', id);
    }
  },
});