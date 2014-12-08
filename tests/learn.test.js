// file: tests/learn.test.js - created at 2014-12-08, 01:40
var assert = require('assert');
var adapt = require('../');

describe('learn', function () {
  var actual = adapt.learn();

  it('should be an instance of Learn', function () {
    assert(actual instanceof adapt.learn.Learn, 'Not is Learn instance');
  });

  it('should be push an serie', function () {
    var result = actual.add({ title: 'first' }, 2.5);
    assert(result instanceof adapt.learn.Learn, 'Not is Learn instance');
  });

  it('should be get series', function () {
    var current = actual.getSeries();
    var expected = [{ title: 'first' }];

    assert.deepEqual(current, expected, 'Not is equal to expected');
  });

  it('should be get series sorted by score', function () {
    actual
      .add({ title: 'zero' }, 3.5)
      .add({ title: 'third' }, .7)
      .add({ title: 'second' }, 1.0);

    var current = actual.getSeries();
    var expected = [
      { title: 'zero' },
      { title: 'first' },
      { title: 'second' },
      { title: 'third' },
    ];

    assert.deepEqual(current, expected, 'Not is equal to expected');
  });

  it('should be get Next of', function () {
    var current = actual.getNextOf(1);
    var expected = { title: 'first' };
    assert.deepEqual(current, expected, 'Not is next of');
  });

  it('should be get Of', function () {
    var current = actual.getOf(1);
    var expected = { title: 'second' };
    assert.deepEqual(current, expected, 'Not is of');
  });

  it('should be get previous of', function () {
    var current = actual.getPreviousOf(1);
    var expected = { title: 'third' };
    assert.deepEqual(current, expected, 'Not is next of');
  });
});
