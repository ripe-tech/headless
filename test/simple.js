var assert = require("assert");
var base = require("../lib/util/base");

describe("Array", function() {
    describe("#indexOf()", function() {
        it("should return -1 when the value is not present", function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
    describe("#length", function() {
        it("should return proper length", function() {
            assert.equal(3, [1, 2, 3].length);
        });
    });
});

describe("ENGINES", function() {
    it("should not be empty", function() {
        assert.equal(true, Object.keys(base.ENGINES).length > 0);
    });
});