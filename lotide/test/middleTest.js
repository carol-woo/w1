const assert = require('chai').assert;
const middle = require('../middle');

// const assertArraysEqual = require('../assertArraysEqual');
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3]));// => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe('#middle', () => {
  it("returns '[]' for '[1]' ", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("return '[2]' for '[1,2,3]' ", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});