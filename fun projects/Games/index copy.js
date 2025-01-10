let gameStatus = false;
let score = 0;
let sequence = [];
let userInput = [];
let alertRed = false;
let alertGreen = false;
let alertBlue = false;
let alertYellow = false;

console.log(gameStatus);

async function gameStart() {
    gameStatus = true;

    function randomLetter() {
        const randomNum = Math.random();
        if (randomNum > 0 && randomNum <= 0.25) return "R";
        else if (randomNum > 0.25 && randomNum <= 0.5) return "G";
        else if (randomNum > 0.5 && randomNum <= 0.75) return "B";
        else return "Y";
    }

    let continueGame = false;

    // Attach Event Listeners ONCE
    document.getElementById("upLeft").onclick = () => handleUserInput("R");
    document.getElementById("upRight").onclick = () => handleUserInput("G");
    document.getElementById("downLeft").onclick = () => handleUserInput("B");
    document.getElementById("downRight").onclick = () => handleUserInput("Y");

    // Handle User Input
    function handleUserInput(input) {
        userInput.push(input); // Add clicked button to user input
        console.log("User Input:", userInput);

        // Check Input Progressively
        for (let i = 0; i < userInput.length; i++) {
            if (userInput[i] !== sequence[i]) {
                console.log("Game Over");
                gameStatus = false;
                return;
            }
        }

        // If input matches and complete, allow the game to continue
        if (userInput.length === sequence.length) {
            console.log("Round Passed!");
            userInput = []; // Clear user input for the next round
            continueGame = true;
        }
    }

    // Main Game Loop
    while (gameStatus) {
        continueGame = false;

        // Add next move to the sequence
        const nextMove = randomLetter();
        sequence.push(nextMove);
        console.log("Sequence:", sequence);

        // Simulate Display of Sequence (You can add actual UI effects here)
        for (const color of sequence) {
            console.log("Show:", color); // Simulate showing the sequence
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for sequence display
        }

        // Wait for User Input
        while (!continueGame) {
            await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay to avoid blocking
        }
    }
}
