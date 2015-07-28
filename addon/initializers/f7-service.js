export function initialize(registry, application) {
  application.inject('route', 'f7', 'service:f7');
  application.inject('controller', 'f7', 'service:f7');
  application.inject('component', 'f7', 'service:f7');
}

export default {
  name: 'f7-service',
  initialize: initialize
};
