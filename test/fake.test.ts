import { expect } from 'chai';

describe("Fake tests:", () => {
    describe("2 + 4", () => {
        it("should be 6", () => {
            expect(2 + 4).to.equals(6);
        });

        it("should not be 7", (done) => {
            expect(2 + 4).to.not.equals(7);
            done();
        });
    });
});