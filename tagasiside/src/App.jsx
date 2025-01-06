import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Tagasiside from './pages/Tagasiside'

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


 <Routes>
 <Route path="/" element={<div>Tere</div>}/>

  <Route path="/tagasiside" element={<Tagasiside />}/>
  </Routes>
 </div>
    </>
  )
}

export default App
