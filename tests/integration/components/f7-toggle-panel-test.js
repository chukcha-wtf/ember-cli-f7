import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('f7-toggle-panel', 'Integration | Component | f7 toggle panel', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{f7-toggle-panel}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#f7-toggle-panel}}
      template block text
    {{/f7-toggle-panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
