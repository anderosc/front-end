import Kontakt from "./pages/Kontakt"
import Avaleht from "./pages/Avaleht"; 
import Meist from "./pages/Meist";
import Input from "./pages/input";
import { Link, Routes, Route } from 'react-router-dom';

import './App.css'
import Months from "./pages/Months";
import Animals from "./pages/Animals";
import Words from "./pages/Words";
import Books from "./pages/Books";

function App() {

  return (
    <>
      <Link to="/">
      <button> Avalehele</button>
      </Link>

      <Link to="/meist">
      <button> Meist</button>
      </Link>

      <Link to="/kontakt">
      <button> Kontakt</button>
      </Link>

      <Link to="/input">
      <button> Input </button>
      </Link>

      <Link to="/months">
      <button> Months</button>
      </Link>

      <Link to="/animals">
      <button> Animals</button>
      </Link>

      <Link to="/words">
      <button> Words</button>
      </Link>

      <Link to="/books">
      <button> Books</button>
      </Link>

      
     
      <Routes>
        <Route path="/" element={< Avaleht />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/meist" element={<Meist />} />
        <Route path="/input" element={<Input />} />
        <Route path="/months" element={< Months />} />
        <Route path="/animals" element={< Animals />} />
        <Route path="/words" element={< Words />} />
        <Route path="/books" element={< Books />} />

      </Routes>
       
    </>
  )
}

export default App
