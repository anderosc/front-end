import { Link, Route, Routes } from "react-router-dom"

import './App.css'
import Home from "./pages/Home"

function App() {

  return (
    <>
      <div>
      <Link to="/home">
      <button>Home</button> 
      </Link>

      <Routes>
        <Route path="/home" element={< Home />} /> 
      </Routes>


      </div>
    </>
  )
}

export default App
