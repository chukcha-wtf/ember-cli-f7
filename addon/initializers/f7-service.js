export function initialize() {
  let application = arguments[1] || arguments[0];
  application.inject('route', 'f7', 'service:f7');
  application.inject('controller', 'f7', 'service:f7');
  application.inject('component', 'f7', 'service:f7');
}

export default {
  name: 'f7-service',
  initialize: initialize
};
