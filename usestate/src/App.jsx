import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Ilmumine from './pages/Ilmumine'
import Kujundus from './pages/Kujundus'
import Muutmine from './pages/Muutmine'
import Telefon from './pages/Telefon'

function App() {
  return (
    <Router>
      <div>
        <Link to="/Ilmumine"> <button> Ilmumine</button> </Link>
        <Link to="/Kujundus"> <button> Kujundus</button> </Link>
        <Link to="/Muutmine"> <button> Muutmine</button> </Link>
        <Link to="/Telefon"> <button> Telefon</button> </Link>


        <Routes> 
          <Route path="/" element={<Navigate to="/Ilmumine" />} /> 
          <Route path="/Ilmumine" element={<Ilmumine />} /> 
          <Route path="/Kujundus" element={<Kujundus />} /> 
          <Route path="/Muutmine" element={<Muutmine />} /> 
          <Route path="/Telefon" element={<Telefon />} /> 

        </Routes>
      </div>
    </Router>
  )
}

export default App

