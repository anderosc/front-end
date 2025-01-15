const dice1 = "⚀"
const dice2 = "⚁"
const dice3 = "⚂"
const dice4 = "⚃"
const dice5 = "⚄"
const dice6 = "⚅"


function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.ceil(Math.random() *6) ;
        values.push(value);
        switch(value){
            case 1:
            images.push(dice1)
            break;
            case 2:
            images.push(dice2)
            break;
            case 3:
            images.push(dice3)
            break;
            case  4:
            images.push(dice4)
            break;
            case  5:
            images.push(dice5)
            break;
            case  6:
            images.push(dice6)
            break;
        }
    }
    diceResult.textContent = `dice: ${values.join(`, `)}`
    diceImages.innerHTML = images.join(``);

}
