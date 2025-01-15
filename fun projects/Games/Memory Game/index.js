let gameStatus = false;
let score = 0;
let sequence = [];
let userInput = []
let alertRed = false
let alertGreen = false
let alertBlue = false
let alertYellow = false

console.log(gameStatus)

async function gameStart(){
    gameStatus = true
    
    function randomLetter(){
        let randomLetter 
        let randomNum = Math.random()
            if(randomNum >0 && randomNum <= 0.25){
                randomLetter = "R"
            }
            else if(randomNum >0.25 && randomNum <= 0.5){
                randomLetter = "G"
            }
            else if(randomNum >0.5 && randomNum <= 0.75){
                randomLetter = "B"
            }
            else if(randomNum >0.75 && randomNum <= 1){
                randomLetter = "Y"
            }
         
        return randomLetter
    }
    

   
    // random number here  
    let nextMove; 
    //Game sequence loop
    while(gameStatus === true){

        for(let i = 0;gameStatus; i++){
            nextMove = randomLetter()
            sequence[i] = nextMove
            console.log(sequence)

            for(let s = 0; s <= i; s++){

                document.getElementById("upLeft").addEventListener("click", function() {
                    userInput.push("R");  // Push "R" for Red
                    console.log(userInput);  // Optional: log the array to check
                  });
                  
                  document.getElementById("upRight").addEventListener("click", function() {
                    userInput.push("G");  // Push "G" for Green
                    console.log(userInput);  // Optional: log the array to check
                  });
                  
                  document.getElementById("downLeft").addEventListener("click", function() {
                    userInput.push("B");  // Push "B" for Blue
                    console.log(userInput);  // Optional: log the array to check
                  });
                  
                  document.getElementById("downRight").addEventListener("click", function() {
                    userInput.push("Y");  // Push "Y" for Yellow
                    console.log(userInput);  // Optional: log the array to check
                  });
                
                if(sequence.length === userInput.length){
                    for(a = 0; sequence.length; a++){
                        sequence[a] === userInput[a] ? console.log("good"): gameStatus = false
                    }
                }
            }

            if(gameStatus === false){
                break
            }
            for (const color of sequence) {
                console.log("Show:", color); // Simulate showing the sequence
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for sequence display
            }
            while (!gameStatus) {
                await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay to avoid blocking
            }

        }
            console.log(sequence)
    }

}


