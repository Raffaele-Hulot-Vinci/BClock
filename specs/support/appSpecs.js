import { Main } from "../src/app.js"

describe("a bunch of tests for the berlin clock", function() {
    const main = new Main();
    const dateZero = new date(0, 0, 0, 0, 0, 0);

    it("bottom line should be - - - - when given 0 minutes", function(){
        const result = main(dateZero);
        expect(result).toBe("- - - -");

    });
});
