import { expect } from 'chai';

import { ModuleA } from '../src/ModuleA';

describe("ModuleA test", () => {
    it("should return 'Hello name!'", () => {
        expect(new ModuleA("Nshen").toString()).to.be.equal("Hello Nshen!");
        expect(new ModuleA().toString()).to.be.equal("Hello World!");
    });
});