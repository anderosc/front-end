import {useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import congratsData from "../../../data/congrats.json"
import "./compmodes.css"

function CompAddition() {
    const operator = "+";
    const [operation, setOperation] = useState("");
    const [answer, setAnswer] = useState("");
    const [randomNumber, setRandomNumber] = useState("");
    const [randomNumber2, setRandomNumber2] = useState("");
    const [seconds, setSeconds] = useState(40);
    const [gameStatus, setGameStatus] = useState(false);
    const [points, setPoints] = useState(0)
    const [level, setLevel] = useState(1);
    const [showGif, setShowGif] = useState(false);


    const [prevGameStatus, setPrevGameStatus] = useState(false);




    
    function startGame(){
        setPoints(0)
        setGameStatus(true)
        setOperation("+")
        updateCountDown();
        randomNumberGenerator()
    }

    function updateCountDown(){
        setGameStatus(true);
    }


    useEffect(() => {
        if (gameStatus && seconds > 0) {
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timer); // Cleanup timeout to avoid memory leaks
        } else if ( seconds <= 0) {
            setGameStatus(false);
            setSeconds(40);
            // let i = Math.round(Math.random() * 100); 
            // console.log(i);
            // toast.success(congratsData[i]);
        }
        if(!gameStatus && prevGameStatus){
            let i = Math.round(Math.random() * 100); 
            console.log(i);
            toast.success(congratsData[i]);
        }
        setPrevGameStatus(gameStatus);

    }, [seconds, gameStatus]);
    
    
    
    
    


    function randomNumberGenerator(){
        let min = 0
        let max = 10

        const number1 = Math.round(Math.random()* (max - min) + min);
        const number2 = Math.round(Math.random()* (max - min) + min);
        setRandomNumber(number1)
        setRandomNumber2(number2)
        
        return;
    }


    const checkAnswer = () => {
        if(gameStatus === false){
            return;
        }
        const checkedanswer = calculateAnswer()
        if(answer == checkedanswer ){
            setAnswer("");
            randomNumberGenerator();
            setPoints(points+1)
            setSeconds(seconds + 3);
        } else{
            setAnswer("");
            setShowGif(true); // Show the GIF when the answer is wrong
            setTimeout(() => { setShowGif(false);
            randomNumberGenerator();
            setOperation("+")
            }, 4500); // Hide the GIF after 2 seconds
            setRandomNumber();
            setRandomNumber2();
            setOperation("");
            
        }
    }



    function calculateAnswer(){
        let answercheck;
        if(operator === "+"){
            answercheck = randomNumber + randomNumber2;
        }
        return answercheck;
    }

  return (
    <div> 
        <div>
            <p>LEVEL:{level}</p>
            <p>TIME: {seconds} sec</p>
            <p>BrainJuice: {points}  </p>
        </div>
    <div className= "body">
      {gameStatus === true ?<label className= "operation">{randomNumber} {operation} {randomNumber2}</label> : ""}
      <br />
        <br />
        <label className= "answer">{answer}</label>

        {showGif && (
    <div className="gif-popup">
        <img src="/gif/wrongans.gif"  />
    </div>
)}

        <br />
        <div >
            <div className="keyboard">
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
            </div>
            <br />
            <br />

            {gameStatus === false ?<button className="button-00" onClick={() => startGame()}>START</button>  : undefined}
        </div>
        <ToastContainer 
            position="top-right"
            autoClose={3500}
            theme="dark"
            closeOnClick
            />
    </div>
    </div>
  )
}

export default CompAddition