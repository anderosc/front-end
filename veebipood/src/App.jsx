
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




function App() {
 

  return (
    <>

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



      <Route path="*" element={<Notfound />} />




    </Routes>
    </>

  )
}

export default App
