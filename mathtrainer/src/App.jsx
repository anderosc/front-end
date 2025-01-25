import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Train from "./pages/train/Train"
import Study from "./pages/study/Study"
import Contact from "./pages/Contact"
import Game from "./pages/train/Game"
import './App.css'

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

          <Link to="/study">
          <div> <button className="button">Study</button> </div> 
          </Link>
          
          <Link to="/contact">
          <div> <button className="button">Contact</button></div>
          </Link>
        </div>

        <Routes>
          <Route path="/home" element={< Home />} />
            <Route path="/train" element={< Train />} />
            <Route path="/study" element={< Study />} />
            <Route path="/contact" element={< Contact />} /> 
            <Route path="/game" element={< Game />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
