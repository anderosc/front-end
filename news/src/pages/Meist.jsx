import { useState } from "react";
import tootajadData from "../../data/tootajad.json"

function Meist() {
  const tootajad = (tootajadData);

  const [kontakt, n2itaKontakt] = useState("");

  const [valitud, uuendaValitud] = useState("");

  const kuvaKontakt = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);
  }

  return (
    <div>
      {tootajad.map(tootaja =>
      <div className={tootaja.nimi === valitud ? "valitud" : undefined} key={tootaja.nimi}>
      {tootaja.nimi} <br /> {tootaja.ala} <br /> 
      <button onClick={() => kuvaKontakt(tootaja)}>Vt tel. numbrit</button>
      { kontakt !== "" && <div> Tema kontakt: {kontakt} </div>}
      <br /> <br />
      </div>)}
    </div>
  )
}

export default Meist