import { useState } from "react"
import PildidJSON from '../../data/pildid.json'

function Pildid() {
    const [pildid, setPildid] = useState(PildidJSON);

    const filtreeriSydamed = () => {
        //reslt
        const vastus = pildid.filter(pilt => pilt.includes("laigitud") );
        setPildid(vastus);

        //kui loon funk sees const abil uue muutuja, siis saan
        //sedakasutada ainult siin funk sees (ing scope)
    }
    const sorteeriKasvavalt = () =>{
        const vastus= pildid.toSorted((a ,b) => a.length -  b.length)
        setPildid(vastus)
    }
    const sorteeriKahanevalt = () =>{
        const vastus= pildid.toSorted((a ,b) => b.length -  a.length)
        setPildid(vastus)
    }

    // pildi kustutamie
    
  return (
    <div>
      

        <div> Kokku: {pildid.length} tk </div>

        <button onClick={sorteeriKasvavalt} >Sorteeri faili nime pikkus kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri faili nime pikkus kahavevanlt</button>

        <button onClick={filtreeriSydamed} > Jäta alles südamed </button>
        {pildid.map(pilt => <img key={pilt} src={pilt} alt="" /> )}
    </div>
  )
}

export default Pildid
