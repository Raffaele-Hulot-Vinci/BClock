export class Main {

    simpleMinutes (time) {
        lights = time.getMinutes() % 5;
        for (let index = 1; index <= 4; index++) {
            if(index<=lights){
                print("J");
            }else{
                print("-");
            }
            print(" ");
        }
    }
}