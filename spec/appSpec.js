import { Main } from "../src/app.js"

describe("a bunch of tests for the berlin clock", function() {
    const main = new Main();
    const dateZero = new Date(0, 0, 0, 0, 0, 0);
    const dateOne = new Date(1,1,1,1,1,1);
    const dateTwo = new Date(2,2,2,2,2,2);
    const dateThree = new Date(3,3,3,3,3,3);
    const dateFour = new Date(4,4,4,4,4,4);
    const dateFive = new Date(5,5,5,5,5,5);
    const dateSix = new Date(6,6,6,6,6,6);
    const dateSeven = new Date(7,7,7,7,7,7);
    const dateEight = new Date(8,8,8,8,8,8);

    it("line should be - - - - when given 0 minutes", function(){
        const result = main.simpleMinutes(dateZero);
        expect(result).toBe("- - - - ");
    });

    it("line should be J - - - when given 1 minutes", function(){
        const result = main.simpleMinutes(dateOne);
        expect(result).toBe("J - - - ");
    });

    it("line should be J J - - when given 2 minutes", function(){
        const result = main.simpleMinutes(dateTwo);
        expect(result).toBe("J J - - ");
    });

    it("line should be J J J - when given 3 minutes", function(){
        const result = main.simpleMinutes(dateThree);
        expect(result).toBe("J J J - ");
    });

    it("line should be J J J J when given 4 minutes", function(){
        const result = main.simpleMinutes(dateFour);
        expect(result).toBe("J J J J ");
    });

    it("line should be - - - - when given 5 minutes", function(){
        const result = main.simpleMinutes(dateFive);
        expect(result).toBe("- - - - ");
    });

    it("line should be J - - - when given 6 minutes", function(){
        const result = main.simpleMinutes(dateSix);
        expect(result).toBe("J - - - ");
    });

    it("line should return - when second is 1", function() {
        const result = main.simpleSeconds(dateOne);
        expect(result).toBe("-");
    });

    it ("line should return R when second is 2", function() {
        const result = main.simpleSeconds(dateTwo);
        expect(result).toBe("R");
    });

    it("line should return - when second is 3", function() {
        const result = main.simpleSeconds(dateThree);
        expect(result).toBe("-");
    });

    it ("line should return the full Berlin Clock display for 00:00:00", function() {
        const result = "J\n----\n----\n------------\n----";
        const main = new Main();
        
        
    })

});
