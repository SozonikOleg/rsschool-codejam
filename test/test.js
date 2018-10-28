const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');
const make = require('../src/make');

describe('test for CodeJam-3 CoreJS', function () {
  describe('#sumOfOther()', function () {
    it('should return sum elements array', function () {
      assert.deepEqual([8, 7, 6, 9], sumOfOther([2, 3, 4, 1]));
    });
  });
  describe('#make()', function () {
    it('should return sum of two parameters', function () {
      function sum(a, b) {
        return a + b;
      };
      assert.deepEqual(777, make(15)(34, 21, 666)(41)(sum));
    });
    it('should return minus of two parameters', function () {
      function minus(a, b) {
        return a - b;
      };
      assert.deepEqual(-777, make(15)(34, 21, 666)(41)(minus));
    });
  });
});