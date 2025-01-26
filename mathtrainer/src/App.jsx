import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Train from "./pages/train/Train"
import Contact from "./pages/Contact"
import './App.css'
import Addition from "./pages/train/Modes/Addition"
import Division from "./pages/train/Modes/Division"
import Subtraction from "./pages/train/Modes/Subtraction"
import Multiplication from "./pages/train/Modes/Multiplication"
import Scores from "./pages/study/Scores"
import Competive from "./pages/train/competive/Competive"
import CompAddition from "./pages/train/competive/CompAddition"
import CompSubtraction from "./pages/train/competive/CompSubtraction"
import CompMultiplication from "./pages/train/competive/CompMultiplication"
import CompDivision from "./pages/train/competive/CompDivision"

function App() {

  return (
    <>
      <div className="top">

        <div className="topbarmenu">
          <Link to="/home"> 
          <div> <button className="button" >Home</button> </div>  
          </Link>

          <Link to="/train">
          <div > <button className="button">Train</button> </div> 
          </Link>

          <Link to="/comp">
          <div > <button className="button">Competive</button> </div> 
          </Link>

          <Link to="/scores">
          <div> <button className="button">Scores</button> </div> 
          </Link>
          
          <Link to="/contact">
          <div> <button className="button">Contact</button></div>
          </Link>
        </div>

        <Routes>
          <Route path="/home" element={< Home />} />
            <Route path="/train" element={< Train />} />
            <Route path="/scores" element={< Scores />} />
            <Route path="/contact" element={< Contact />} /> 
            <Route path="/addition" element={< Addition />} /> 
            <Route path="/subtraction" element={< Subtraction />} /> 
            <Route path="/multiplication" element={< Multiplication />} /> 
            <Route path="/division" element={< Division />} /> 
            <Route path="/comp" element={< Competive />} /> 
            <Route path="/comp/addition" element={< CompAddition />} /> 
            <Route path="/comp/subtraction" element={< CompSubtraction />} /> 
            <Route path="/comp/multiplication" element={< CompMultiplication />} /> 
            <Route path="/comp/division" element={< CompDivision />} /> 



        </Routes>
      </div>
    </>
  )
}

export default App
