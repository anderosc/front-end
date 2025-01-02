import { useState } from "react";
import "./kontakt.css"

function Kontakt() {
  const [n2itaTelKristiine, muudanN2itaTelKristiine] = useState(false);
  const [n2itaTelYlemiste, muudanN2itaTelYlemiste] = useState(false);
  const [n2itaTelTasku, muudanN2itaTelTasku] = useState(false);

  return (
    <div>
      <div>Võta ühendust!</div>
      <br />
      <div className={n2itaTelKristiine === true ? "valitud" : undefined} onClick={() => muudanN2itaTelKristiine(!n2itaTelKristiine)}> 
        <div> Kristiine Keskus</div>
      {n2itaTelKristiine && <div className="valitud" >+372 54 54 10 10</div>}
      <div >Endla 45</div>
      </div>

      <br />

      <div className={n2itaTelYlemiste === true ? "valitud" : undefined} onClick={() => muudanN2itaTelYlemiste(!n2itaTelYlemiste)}> 
        <div>Ülemiste Keskus</div>
      {n2itaTelYlemiste && <div>+372 54 54 10 10</div>}
      <div>Suur-Sõjamäe 4</div>
      </div>
      

      <br />

      <div className={n2itaTelTasku === true ? "valitud" : undefined} onClick={() => muudanN2itaTelTasku(!n2itaTelTasku)}> 
        <div>Tasku Keskus</div>
      {n2itaTelTasku && <div>+372 54 54 10 10</div>}
      <div>Turu 2</div>
      </div>

      <br />
    </div>
  );
}

export default Kontakt;
