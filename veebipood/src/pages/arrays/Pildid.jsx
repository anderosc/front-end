import { useState } from "react"
import PildidJSON from '../../data/pildid.json'
import { Link } from "react-router-dom";

function Pildid() {
    const [pildid, setPildid] = useState(PildidJSON);

    const filtreeriSydamed = () => {
        //reslt
        const vastus = pildid.filter(pilt => pilt.url.includes("laigitud") );
        setPildid(vastus);

        //kui loon funk sees const abil uue muutuja, siis saan
        //sedakasutada ainult siin funk sees (ing scope)
    }
    const sorteeriKasvavalt = () =>{
        const vastus= pildid.toSorted((a ,b) => a.url.length -  b.url.length)
        setPildid(vastus)
    }
    const sorteeriKahanevalt = () =>{
        const vastus= pildid.toSorted((a ,b) => b.url.length -  a.url.length)
        setPildid(vastus)
    }

    // pildi kustutamie
    
  return (
    <div>
      

        <div> Kokku: {pildid.length} tk </div>

        <button onClick={sorteeriKasvavalt} >Sorteeri faili nime pikkus kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri faili nime pikkus kahavevanlt</button>

        <button onClick={filtreeriSydamed} > Jäta alles südamed </button>
        
        {pildid.map(pilt => 
            <Link to={"/pilt" + pilt.url } key={pilt.url} > 
            <img  src={pilt.url} alt="" /> 
            </Link>
            )}
    </div>
  )
}

export default Pildid
