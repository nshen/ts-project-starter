"use strict";
var chai_1 = require("chai");
describe("Fake tests:", function () {
    describe("2 + 4", function () {
        it("should be 6", function () {
            chai_1.expect(2 + 4).to.equals(6);
        });
        it("should not be 7", function (done) {
            chai_1.expect(2 + 4).to.not.equals(7);
            done();
        });
    });
});
//# sourceMappingURL=fake.test.js.map