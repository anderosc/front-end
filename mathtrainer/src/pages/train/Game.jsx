import {useState } from "react"

function Game() {
    const [operation, setOperation] = useState("");
    const [answer, setAnswer] = useState("");
    const [randomNumber, setRandomNumber] = useState("");
    const [randomNumber2, setRandomNumber2] = useState("")
    const settingsLS = JSON.parse(localStorage.getItem("settings"));
    const difficultyLS = JSON.parse(localStorage.getItem("difficulty"));

    
    function startGame(){
        randomOperator();
        randomNumberGenerator();
    }
    function randomOperator(){
        let randomOperator;
        let random = Math.random();
        
        if(random <1 && random >0){
            setOperation("+");
        }
        console.log(operation)
        return;
    }

    function randomNumberGenerator(){
        const number1 = Math.round(Math.random()* 10);
        const number2 = Math.round(Math.random()* 10);
        console.log(difficultyLS)
        if(difficultyLS[0] === 0){
            setRandomNumber(number1)
            setRandomNumber2(number2)
        }
        return;
    }


    const checkAnswer = () => {
        const checkedanswer = calculateAnswer()
        if(answer == checkedanswer ){
            setAnswer("");
            randomOperator();
            randomNumberGenerator();
        } else{
            setAnswer("");
            randomOperator();
            randomNumberGenerator();
        }
    }

    function calculateAnswer(){
        const operator = operation;
        let answercheck;
        if(operator === "+"){
            answercheck = randomNumber + randomNumber2;
        }
        return answercheck;
    }

  return (
    <div>
        <label htmlFor="">{randomNumber}{operation}{randomNumber2}</label>
        <br />
        <br />
        <label htmlFor="">{answer}</label>
        <br />
        <div>
            <button onClick={() => setAnswer(answer + "7")}>7</button>
            <button onClick={() => setAnswer(answer + "8")}>8</button>
            <button onClick={() => setAnswer(answer + "9")}>9</button>
            <br />
            <button onClick={() => setAnswer(answer + "4")}>4</button>
            <button onClick={() => setAnswer(answer + "5")}>5</button>
            <button onClick={() => setAnswer(answer + "6")}>6</button>
            <br />
            <button onClick={() => setAnswer(answer + "1")}>1</button>
            <button onClick={() => setAnswer(answer + "2")}>2</button>
            <button onClick={() => setAnswer(answer + "3")}>3</button>
            <br />
            <button onClick={() => setAnswer(answer + "0")}>0</button>
            <button onClick={() => setAnswer(answer.slice(0, answer.length-1, ))}>C</button>
            <button onClick={() => checkAnswer()}>OK</button>

            <br />

            <button onClick={() => startGame()}>START</button>
            <button onClick={() => randomOperator()}> test</button>
        </div>
    </div>
  )
}

export default Game