import Ember from 'ember';
import Framework7Mixin from '../../../mixins/framework7';
import { module, test } from 'qunit';

module('Unit | Mixin | framework7');

// Replace this with your real tests.
test('it works', function(assert) {
  var Framework7Object = Ember.Object.extend(Framework7Mixin);
  var subject = Framework7Object.create();
  assert.ok(subject);
});
