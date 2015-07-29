import Ember from 'ember';

export default {
  name: 'application',
  after: 'f7-service',

  initialize: function(registry, application) {
    application.register('service:f7', Framework7);
  }
}