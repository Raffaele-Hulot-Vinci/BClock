export class Main {

    simpleMinutes (time) {
        const lights = time.getMinutes() % 5;
        let output = "";
        for (let index = 1; index <= 4; index++) {
            if(index<=lights){
                output += "J";
            }else{
                output += "-";
            }
            output += " ";
        }
        console.log(output);
        return output;
    }
}