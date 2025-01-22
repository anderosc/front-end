import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Tagasiside from './pages/Tagasiside'
import TagasisideAndjad from './pages/TagasisideAndjad'
import Tegevused from './pages/Tegevused'
import Kasutajad from './pages/Kasutajad'

function App() {


  return (
    <>
    <div> 
      <Link to="/tagasiside"> 
    <button >Tagasiside</button>
    </Link>
    
    <Link to="/"> 
    <button >Avalehele</button>
    </Link>

    <Link to="/tagasiside-andjad"> 
    <button >Tagasiside andjad</button>
    </Link>

    <Link to="/tegevused"> 
    <button >Tegevused</button>
    </Link>

    <Link to="/kasutajad"> 
    <button >Kasutajd</button>
    </Link>


 <Routes>
 <Route path="/" element={<div>Tere</div>}/>

  <Route path="/tagasiside" element={<Tagasiside />}/>
  <Route path="/tagasiside-andjad" element={<TagasisideAndjad />}/>
  <Route path="/tegevused" element={<Tegevused />}/>
  <Route path="/kasutajad" element={<Kasutajad />}/>



  </Routes>
 </div>
    </>
  )
}

export default App
