import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
      <>
          <button className="green-button">Roheline nupp</button>
          <p className="blue-text">Sinine tekst</p>
          <p className="green-text">Roheline tekst</p>
          <img 
              className="styled-image" 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" 
              alt="Näide" 
          />
      </>
  );
}

export default App;



