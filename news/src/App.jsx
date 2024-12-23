
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import Uudised from './pages/Uudised'


function App() {
  

  return (
     
    <>
    <div className='Container' >
    <div className='TopBar'> 
    <Link to='/'>
    <button> Avalehele</button>
    </Link>

    <Link to='/uudised'>
    <button> Uudised </button>
    </Link>

    <Link to='/kontakt'>
    <button> Kontakt</button>
    </Link>

    <Link to='/meist'>
    <button> Meist</button>
    </Link>

    </div>
    </div>


     <Routes> 
      <Route path='' element={ <Avaleht />} />
      <Route path='uudised' element={<Uudised />} /> 
      <Route path='kontakt' element={<Kontakt />} /> 
      <Route path='meist' element={<Meist />} /> 


     </Routes>
    </>
  )
}

export default App
