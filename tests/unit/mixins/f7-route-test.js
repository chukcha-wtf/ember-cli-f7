import Ember from 'ember';
import F7RouteMixin from '../../../mixins/f7-route';
import { module, test } from 'qunit';

module('Unit | Mixin | f7 route');

// Replace this with your real tests.
test('it works', function(assert) {
  var F7RouteObject = Ember.Object.extend(F7RouteMixin);
  var subject = F7RouteObject.create();
  assert.ok(subject);
});
