import { Routes, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import KoikArvutid from './pages/KoikArvutid';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/add" element={<LisaArvuti />} />
        <Route path="/all" element={<KoikArvutid />} />
      </Routes>
    </div>
  );
}

export default App;
