import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import LisaJook from './pages/LisaJook'
import HaldaJoogid from './pages/HaldaJoogid'
import Jook from './pages/Jook'

function App() {

  return (
    <>
      <div>
        <Link to="/avaleht"> 
        <button >Avalehele</button>
        </Link>

        <Link to="/lisa-jook"> 
        <button >Lisa Jook</button>
        </Link>

        <Link to="/halda-joogid"> 
        <button >Halda Joogid</button>
        </Link>

        <Routes>
        <Route path="/" element={<div>Tere</div>}/>
        <Route path="/avaleht" element={<Avaleht />}/>
        <Route path="/lisa-jook" element={< LisaJook />}/>
        <Route path="/halda-joogid" element={< HaldaJoogid />}/>
        <Route path="/jook/:index" element={< Jook />}/>

        </Routes>
      </div>

    </>
  )
}

export default App
