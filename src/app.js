
export class Main {
    simpleHours (time) {
        const lights = time.getHours() % 5;
        let output = "";
        for(let index = 1; index <= 4; index++){
            if(index<=lights){
                output += "R";
            }else{
                output += "-";
            }
            output = " ";

        }
        return output;
    }

    fiveHours (time) {
        const lights = Math.floor(time.getHours() / 5);
        let output = "";
        for (let index = 1; index <= 4; index++) {
        if (index <= lights) {
            output += "R";  
        } else {
            output += "-"; 
        }
        output = " ";

    }
    return output;
    }

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
        return output;
    }

    bigMinutes(time) {
        const lights = time.getMinutes();
        let output = "";
        for (let index = 5; index < 60; index+=5) {
            if(index<=lights){
                if(index%15 == 0){
                    output += "R";
                }else{
                    output += "J";
                }
            }else{
                output += "-";
            }
            output += " ";
        }
        return output;
    }

    simpleSeconds(time) {
        const lights = time.getSeconds() % 2;
        let output = "";
        if(lights%2==0) {
            output += "R";
        } else {
            output += "-";
        }
        return output;
    }

    getBerlinClock(minutes,seconds) {
        
        return [
            this.getBerlinClock(this.simpleMinutes(minutes),this.simpleSeconds(seconds))
            

        ].join('\n');
    
}
    

}

    
