import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)






// 1. react router drom, uus projekt'
// 2. usedate, useref, &&, oneclick funktsioonid