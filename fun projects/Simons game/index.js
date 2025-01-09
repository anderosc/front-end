let gameStatus = false;
let score = 0;
let sequence = [];
let alertRed = false
let alertGreen = false
let alertBlue = false
let alertYellow = false

console.log(gameStatus)
function gameStart(){
    console.log("Hello")
    gameStatus = true

    while(gameStatus == true){
        randomNum = Math.random()
            switch(randomNum){
                case randomNum >0 && randomNum <= 0.25:
                alertRed = true
                break
                case randomNum >0.25 && randomNum <= 0.5:
                alertGreen = true
                break
                case randomNum >0.5 && randomNum <= 0.75:
                alertBlue = true
                break
                case randomNum >0.75 && randomNum <= 1:
                alertYellow = true
                break
                
            }
        console.log(randomNum)
        gameStatus = false
        break;
    }

}

