import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tool-panel/toolbar-button', 'Integration | Component | tool panel/toolbar button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tool-panel/toolbar-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tool-panel/toolbar-button}}
      template block text
    {{/tool-panel/toolbar-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
