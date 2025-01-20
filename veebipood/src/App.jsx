
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Notfound from './pages/Notfound';
import Ostukorv from './pages/Ostukorv';
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/arrays/Esindused';
import Seaded from './pages/Seaded';
import LisaToode from './pages/lisa/LisaToode';
import Kalkulaator from './pages/Kalkulaator';
import NavigationBar from './components/NavigationBar';
import Hinnad from './pages/arrays/Hinnad';
import Pildid from './pages/arrays/Pildid';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import HaldaEsindusi from './pages/halda/HaldaEsindusi';
import HaldaPildid from './pages/halda/HaldaPildid';
import HaldaTooted from './pages/halda/HaldaTooted';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaHinnad from './pages/halda/HaldaHinnad'
import LisaHind from './pages/lisa/LisaHind';
import LisaPilt from './pages/lisa/LisaPilt';
import LisaEsindus from './pages/lisa/LisaEsindus';
import LisaTootaja from './pages/lisa/LisaTootaja';
import YksHind from './pages/yks/YksHind';
import YksPilt from './pages/yks/YksPilt';
import Ykstoode from './pages/yks/Ykstoode';
import YksEsndus from './pages/yks/YksEsndus';
import YksTootaja from './pages/yks/YksTootaja';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaPilt from './pages/muuda/MuudaPilt';
import MuudaToode from './pages/muuda/MuudaToode';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import HaldaKasutajad from './pages/auth/HaldaKasutajad';
import Login from './pages/auth/Login';
import Registeeru from './pages/auth/Registeeru';
import { useState } from 'react';




function App() {
  const [dark, setDark] = useState(localStorage.getItem("dark") || "light");

  const darkMode = () =>{
    setDark("true");
    localStorage.setItem("dark", "true");
  }
  const lightMode = () =>{
    setDark("false");
    localStorage.setItem("dark", "false");

  }
  return (
    <div className={dark === "true" ? "dark" : "light"}>
      <button onClick={darkMode}> Dark</button>
      <button onClick={lightMode}> Light</button>
    <NavigationBar />
  
    <Routes>
      <Route path="/" element={< Avaleht />} />
      <Route path="/ostukorv" element={< Ostukorv />} />
      <Route path="/osta-kinkekaart" element={< Kinkekaart />} />
      <Route path="/seaded" element={< Seaded />} />
      <Route path="/lisa-toode" element={< LisaToode />} />
      <Route path="/kalkulaator" element={< Kalkulaator />} />

      <Route path="/esindused" element={< Esindused/>} />
      <Route path="/hinnad" element={< Hinnad/>} />
      <Route path="/pildid" element={< Pildid />} />
      <Route path="/tootajad" element={< Tootajad />} />
      <Route path="/tooted" element={< Tooted />} />
      
      <Route path="/halda-esindused" element={< HaldaEsindusi/>} />
      <Route path="/halda-pildid" element={< HaldaPildid />} />
      <Route path="/halda-tooted" element={< HaldaTooted />} />
      <Route path="/halda-tootajad" element={< HaldaTootajad />} />
      <Route path="/halda-hinnad" element={< HaldaHinnad />} />


      <Route path="/lisa-hind" element={< LisaHind />} />
      <Route path="/lisa-pilt" element={< LisaPilt />} />
      <Route path="/lisa-toode" element={< LisaToode />} />
      <Route path="/lisa-esindus" element={< LisaEsindus />} />
      <Route path="/lisa-tootaja" element={< LisaTootaja />} />

{/* Yks peale sattumiseks ei pane teda navbari /menüüsse, tema peale satun nt avaleleht või toote lehelt: .map() seest */}
      <Route path="/hind/:i" element={< YksHind />} />
      <Route path="/pilt/:leht" element={< YksPilt />} />
      <Route path="/toode/:nimi" element={< Ykstoode />} />
      <Route path="/esindus/:nimi" element={< YksEsndus />} />
      <Route path="/tootaja/:nimi" element={< YksTootaja />} />

      <Route path="/muuda-hind/:index" element={< MuudaHind />} />
      <Route path="/muuda-pilt/:index" element={< MuudaPilt />} />
      <Route path="/muuda-toode/:index" element={< MuudaToode />} />
      <Route path="/muuda-esindus/:index" element={< MuudaEsindus />} />
      <Route path="/muuda-tootaja/:index" element={< MuudaTootaja />} />

      <Route path="/halda-kasutajad" element={< HaldaKasutajad />} />
      <Route path="/login" element={< Login />} />
      <Route path="/registeeru" element={< Registeeru />} />




      <Route path="*" element={<Notfound />} />




    </Routes>
    </div>

  )
}

export default App
