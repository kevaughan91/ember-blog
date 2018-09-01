import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | diy', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:diy');
    assert.ok(route);
  });
});
