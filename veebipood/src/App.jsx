
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
      <Route path="/lisa-tootaja" element={< LisaTootaja />} />

{/* Yks peale sattumiseks ei pane teda navbari /menüüsse, tema peale satun nt avaleleht või toote lehelt: .map() seest */}
      <Route path="/hind/:i" element={< YksHind />} />
      <Route path="/pilt/:jrknr" element={< YksPilt />} />
      <Route path="/toode" element={< Ykstoode />} />
      <Route path="/esindus/:index" element={< YksEsndus />} />
      <Route path="/tootaja" element={< YksTootaja />} />

      <Route path="/muuda-hind/:index" element={< MuudaHind />} />
      <Route path="/muuda-pilt" element={< MuudaPilt />} />
      <Route path="/muuda-toode" element={< MuudaToode />} />
      <Route path="/muuda-esindus" element={< MuudaEsindus />} />
      <Route path="/muuda-tootaja" element={< MuudaTootaja />} />


      <Route path="*" element={<Notfound />} />




    </Routes>
    </>

  )
}

export default App
