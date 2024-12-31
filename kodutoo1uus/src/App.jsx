import Kontakt from "./pages/Kontakt"
import Avaleht from "./pages/Avaleht"; 
import Meist from "./pages/Meist";
import Input from "./pages/input";
import { Link, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
      <Link to="/">
      <button> Avalehele</button>
      </Link>

      <Link to="/meist">
      <button> Meist</button>
      </Link>

      <Link to="/kontakt">
      <button> Kontakt</button>
      </Link>

      <Link to="/input">
      <button> Input </button>
      </Link>

      
     
      <Routes>
        <Route path="/" element={< Avaleht />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/meist" element={<Meist />} />
        <Route path="/input" element={<Input />} />


      </Routes>
       
    </>
  )
}

export default App
