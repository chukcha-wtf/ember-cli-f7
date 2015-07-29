import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('f7-page-content', 'Integration | Component | f7 page content', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{f7-page-content}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#f7-page-content}}
      template block text
    {{/f7-page-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
