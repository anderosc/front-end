import { useEffect, useState } from "react"
import "../train/train.css"


function Scores() {
  const buttons = ["Addition", "Subtraction", "Multiplication", "Division"];
  const difficultyLevels = ["Easy", "Medium", "Hard", "Expert"];
  const [activeButton, setActiveButton] = useState(JSON.parse(localStorage.getItem("settingsview")) || []);
  const [activeButton2, setActiveButton2] = useState("");


  useEffect(() =>{
    const storedButton = JSON.parse(localStorage.getItem("settingsview"));
    if(storedButton){
      setActiveButton(storedButton)
    }
  }, [])
  useEffect(() =>{
    const storedButton2 = JSON.parse(localStorage.getItem("difficultyview"))
    if(storedButton2){
      setActiveButton2(storedButton2)
    }
  }, [])


  const activeoperation = (index) => {

    localStorage.setItem("settingsview", JSON.stringify(index));
    setActiveButton(index);
  };
  
  

  const difficulty = (i) =>{

    localStorage.setItem("difficultyview", JSON.stringify(i));
    setActiveButton2(i);
  }

 


  return (
    <div>
      <div>
        <label>Choose category</label> <br />

          <div className="operations">
            {buttons.map(button =>
              <div key={button}>
                <button className={activeButton === button ? "active" : "regular"} 
                onClick={() => activeoperation(button)}>
                  {button}
                </button>
                </div>
            )}
          </div>

            <br />
          <label>Choose category</label>
          <div className="operationslevel">
            
            {difficultyLevels.map(button =>
              <div key={button}>
                <button className={activeButton2 === button ? "active"  : "regular"} 
                onClick={() => difficulty(button)}>
                  {button}
                  </button>
                </div>
            )}
          </div>


       

      </div>
    </div>
  )
}
export default Scores