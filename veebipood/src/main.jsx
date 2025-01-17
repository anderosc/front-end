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
// 6. useParamas(). ühe vütmine, muutmine early return HTML
// 7. objektid - võti-väärtus paarid. localStorage, .find()

// KOJU:
// objektideks: pildid, tootajad, tooted. Võtmed on iga LisaXX sees.
// kui objektideks, siis peab kõik failid muutma STRING --> OBJECT.VÕTI peale
// YksToode - nimi, YksTootajad - nimi, YksPilt - id (uus) --> saatma unikaalsuse tunnust URLi
// LisaToode.jsx