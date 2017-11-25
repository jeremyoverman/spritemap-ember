import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sprite-editor/editor-container', 'Integration | Component | sprite editor/editor container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sprite-editor/editor-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sprite-editor/editor-container}}
      template block text
    {{/sprite-editor/editor-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
