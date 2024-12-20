import { useState } from 'react'
import { Link, Route, Routes, } from 'react-router-dom';
import './App.css';
import Notfound from './pages/Notfound';
import Ostukorv from './pages/Ostukorv';
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import Kalkulaator from './pages/Kalkulaator';




function App() {
  const [count, setCount] = useState(0)  //algväärtus

  return (
    <>
    <Link to="/ostukorv" >
    <img className= 'pilt' src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" />
    </Link>

    

    <Link to="/Ostukorv">
    <button className = 'nupp' > Ostukorv </button>
    </Link>

    <Link to="/osta-kinkekaart">
    <button className = 'nupp' > Kinkekaart </button>
    </Link>

    <Link to="/Seaded">
    <button className = 'nupp' > Seade </button>
    </Link>

    <Link to="/Esindused">
    <button className = 'nupp' > Esindused </button>
    </Link>

    <Link to="/lisa-toode">
    <button className = 'nupp' > Lisatoode </button>
    </Link>

    <Link to="/kalkulaator">
    <button className = 'nupp' > Kalkulaator </button>
    </Link>

    <button onClick={() => setCount(count +1)}> Vajuta mind {count} </button>


    <Routes>
      <Route path="/" element={< Avaleht />} />
      <Route path="/ostukorv" element={< Ostukorv />} />
      <Route path="/osta-kinkekaart" element={< Kinkekaart />} />
      <Route path="/esindused" element={< Esindused/>} />
      <Route path="/seaded" element={< Seaded />} />
      <Route path="/lisa-toode" element={< LisaToode />} />
      <Route path="/kalkulaator" element={< Kalkulaator />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    </>

  )
}

export default App
