import { Main } from "../src/app.js"

describe("a bunch of tests for the berlin clock", function() {
    
    it("line should be - - - - when given 0 minutes", function(){
        const main = new Main();
        const dateZero = new Date(0, 0, 0, 0, 0, 0);
        const result = main.simpleMinutes(dateZero);
        expect(result).toBe("- - - - ");
    });
});
