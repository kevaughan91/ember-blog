import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fashion', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fashion');
    assert.ok(route);
  });
});
