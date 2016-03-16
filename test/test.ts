/// <reference path="../typings/main.d.ts" />

import { expect } from 'chai';



/**
 * Unit tests
 */
describe("User Model Unit Tests:", () => {

    describe("2 + 4", () => {
        it("should be 6", () => {
            expect(2 + 4).to.equals(6);
        });

        it("should not be 7", (done) => {
            expect( 2 + 4).to.not.equals(7);
            done();
        });
    });
});