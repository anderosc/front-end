import { useState } from "react"
import "./train.css"
import { Link} from "react-router-dom";

function Train() {
  const buttons = ["Addition", "Subtraction", "Multiplication", "Divison"];
  const difficultyLevels = ["Easy", "Medium", "Hard", "Expert"];
  const [activeButton, setActiveButton] = useState(JSON.parse(localStorage.getItem("settings")) || []);
  const [activeButton2, setActiveButton2] = useState("");
  const [time, setTime] = useState(60);




  const activeoperation = (index) => {
    setActiveButton((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        // Remove the index from the active state
        const settingsLS = JSON.parse(localStorage.getItem("settings")) || [];
        const updatedSettings = settingsLS.filter((i) => i !== index);
        localStorage.setItem("settings", JSON.stringify(updatedSettings));
        return prevIndexes.filter((i) => i !== index);
      } else {
        // Add the index to the active state
        const settingsLS = JSON.parse(localStorage.getItem("settings")) || [];
        if (!settingsLS.includes(index)) { // Avoid duplicates
          settingsLS.push(index);
          localStorage.setItem("settings", JSON.stringify(settingsLS));
        }
        return [...prevIndexes, index];
      }
    });
  };
  
  

  const difficulty = (i) =>{
    let difficultyLS = JSON.parse(localStorage.getItem("difficulty")) || [];
    difficultyLS = [];
    difficultyLS.push(i);
    localStorage.setItem("difficulty", JSON.stringify(difficultyLS));
    setActiveButton2(i);
  }


  return (
    <div>
      <div>
        <label>Choose category</label> <br />

          <div className="operations">
            {buttons.map(button =>
              <div key={button}>
                <button className={activeButton.includes(button) ? "active" : "regular"} 
                onClick={() => activeoperation(button)}>
                  {button}
                </button>
                </div>
            )}
          </div>

            <br />

          <div className="operationslevel">
            {difficultyLevels.map((button, i) =>
              <div key={button}>
                <button className={activeButton2 === i ? "active"  : "regular"} 
                onClick={() => difficulty(i)}>
                  {button}
                  </button>
                </div>
            )}
          </div>

        <div className="operationtime">
          <label htmlFor=""> Choose time</label> <br />
          <button disabled={time === 10} className="button" onClick={() => setTime(time - 5)}>-</button>
          <label > {time} sec</label> 
          <button className="button" onClick={() => setTime(time + 5)}>+</button> 
        </div>

        <br />
        <Link to="/game"><div><button className="button-64">START</button></div> </Link>

      </div>
    </div>
  )
}

export default Train