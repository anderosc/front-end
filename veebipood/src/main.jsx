import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)






// 1. react-router-dom. uue projekti tekitamine.
// 2. useState. useRef. && ehk dünaamiline väljakuvamine. onClick. funktsioonid
// 3. favicon, font, Firebase üleslaadimine, dünaamiline CSS, componentide väljatõste, kalkulaatorid 
// 4. Arrays: väljakuvamine, key, sort, filter
// 5. Arrays: kustutamine (splice), mälukoht (slice), faili tõstmine (.json), lisamine (push)