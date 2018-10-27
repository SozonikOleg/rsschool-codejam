const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return sum of two parameters', function() {
      assert.deepEqual([8, 7, 6, 9], sumOfOther([2, 3, 4, 1]));
    });
  });
});