"use strict";
var chai_1 = require("chai");
var ModuleA_1 = require("../src/ModuleA");
describe("ModuleA test", function () {
    it("should return 'Hello name!'", function () {
        chai_1.expect(new ModuleA_1.ModuleA("Nshen").toString()).to.be.equal("Hello Nshen!");
        chai_1.expect(new ModuleA_1.ModuleA().toString()).to.be.equal("Hello World!");
    });
});
//# sourceMappingURL=moduleA.test.js.map