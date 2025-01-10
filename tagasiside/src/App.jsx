import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Tagasiside from './pages/Tagasiside'
import TagasisideAndjad from './pages/TagasisideAndjad'

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


 <Routes>
 <Route path="/" element={<div>Tere</div>}/>

  <Route path="/tagasiside" element={<Tagasiside />}/>
  <Route path="/tagasiside-andjad" element={<TagasisideAndjad />}/>

  </Routes>
 </div>
    </>
  )
}

export default App
