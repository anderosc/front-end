import { useEffect, useState } from "react"
import "../train.css"
import {  useNavigate} from "react-router-dom";

function Competive() {
    const buttons = ["Addition", "Subtraction", "Multiplication", "Division"];
    const [activeButton, setActiveButton] = useState(JSON.parse(localStorage.getItem("settingscomp")) || []);
    const path = useNavigate();
  
    useEffect(() =>{
      const storedButton = JSON.parse(localStorage.getItem("settingscomp"))
      if(storedButton){
        setActiveButton(storedButton)
      }
    }, [])
  
  
    const activeoperation = (index) => {
  
      localStorage.setItem("settings", JSON.stringify(index));
      setActiveButton(index);
    };
    
    
  
  
    const go = () => {
      const settings = JSON.parse(localStorage.getItem("settings")) || [];
      if (settings === "Addition") {
        path("/comp/addition");
        
      } else if (settings === "Subtraction") {
        path("/comp/subtraction");
      } else if (settings === "Multiplication") {
        path("/comp/multiplication");
      } else if (settings === "Division") {
        path("/comp/division");
      }
  
    };
  
  
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
        
          <div><button onClick={go} className="button-64">START</button></div> 
         
  
        </div>
      </div>
    )
  }
export default Competive