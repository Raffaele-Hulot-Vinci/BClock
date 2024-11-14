import { Main } from "../src/app.js"

describe("a bunch of tests for the berlin clock", function() {
    const main = new Main();
    const dateZero = new date(0, 0, 0, 0, 0, 0);
    const dateSecondsOdd = new date(1,1,1,1,1,1);
    const dateSecondsEven = new date(2,2,2,2,2,2);
    

    

    it("bottom line should be - - - - when given 0 minutes", function(){
        const result = main(dateZero);
        expect(result).toBe("- - - -");

    });
    it("line should return - - - - when seconds are odd", function() {
        const result = main(dateSecondsOdd);
        expect(result).toBe(dateSecondsOdd);
    }
    );
    it ("line should return J J J J when seconds are even", function() {
        const result = main(dateSecondsEven);
        expect(result).toBe(dateSecondsEven);
    });
    it ("line should return the full Berlin Clock display for 00:00:00", function() {
        const result = "J\n----\n----\n------------\n----";
        expect()
    })
});
