
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <><div> 
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

    <button className='nupp'> TESTi</button>
    <button> test</button>
    </div>


     <Routes> 
      <Route path='' element={<div> See on avaleht</div>} />
      <Route path='uudised' element={<div> See on uudised</div>} /> 
      <Route path='kontakt' element={<div> See on kontakt</div> } /> 
      <Route path='meist' element={<div> See on meist</div>} /> 


     </Routes>
    </>
  )
}

export default App
