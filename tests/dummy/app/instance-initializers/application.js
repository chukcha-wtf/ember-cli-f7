import Ember from 'ember';

export function initialize(instance) {
  Ember.run.schedule('afterRender', () => {
    instance.container.lookup('service:f7').initSwipePanels('left');
  });
}

export default {
  name: 'application',
  initialize: initialize
};