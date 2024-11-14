import { Main } from "../src/app.js"

describe("a bunch of tests for the berlin clock", function() {
    const main = new Main();
    const dateZero = new Date(0, 0, 0, 0, 0, 0);
    const dateSecondsOdd = new Date(1,1,1,1,1,1);
    const dateSecondsEven = new Date(2,2,2,2,2,2);
    

    it("line should be - - - - when given 0 minutes", function(){
        const result = main.simpleMinutes(dateZero);
        expect(result).toBe("- - - - ");
    });

    it("line should return - when seconds are odd", function() {
        
        const result = main.simpleSeconds(dateSecondsOdd);
        expect(result).toBe("-");
    });

    it ("line should return R when seconds are even", function() {
        const result = main.simpleSeconds(dateSecondsEven);
        expect(result).toBe("R");
    });
    
    it ("line should return the full Berlin Clock display for 00:00:00", function() {
        const result = "J\n----\n----\n------------\n----";
        const main = new Main();
        
        
    })

});
