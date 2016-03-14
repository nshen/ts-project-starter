var assert = require('assert');
var expect = require('chai').expect;


describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
        expect([1,2,3].indexOf(5)).to.equal(-1);
        expect([1,2,3].indexOf(0)).to.equal(-1);
        expect([1,2,3].indexOf(3)).to.equal(2);
    //   assert.equal(-1, [1,2,3].indexOf(5));
    //   assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});


