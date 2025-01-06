import { useState } from 'react';
import PildidJSON from '../../data/pildid.json'


function HaldaPildid() {
  const [pildid, setPildid] = useState(PildidJSON);

  const kustutaEsimene = () => {
    PildidJSON.splice(0, 1); 
    setPildid(PildidJSON.slice())
}
const kustutaTeine  = () => {
  PildidJSON.splice(1, 1); 
    setPildid(PildidJSON.slice())
}
const kustutaKolmas = () => {
  PildidJSON.splice(2, 1); 
    setPildid(PildidJSON.slice())
}

  return (
    <div>
      
      <button disabled={pildid.length <1} onClick={kustutaEsimene}>Kustuta esimene pilt</button>
      <button disabled={pildid.length <2} onClick={kustutaTeine}>Kustuta teine pilt</button>
      <button disabled={pildid.length <3} onClick={kustutaKolmas}>Kustuta kolmas pilt</button>
      <br />

      {pildid.map(pilt => <img key={pilt} src={pilt} alt="" /> )}

    </div>
  )
}

export default HaldaPildid