import { useState } from "react"

function Tootajad() {

  const [nimed, setNimed] = useState(["Katriin", "Toomas", "Liis", "Martin", "Anneli", "Priit", "Maarja", "Karl", "Helin", "Rasmus"])
  
  const sorteeriAZ = () => {
    const vastus = nimed.toSorted((a ,b) => a.localeCompare(b))
    setNimed(vastus);
  }
  const sorteeriZA = () => {
    const vastus = nimed.toSorted((a ,b) => b.localeCompare(a))
    setNimed(vastus);
  }
  const sorteeriNeljasTaht = () => {
    const vastus = nimed.toSorted((a ,b) => a.localeCompare(b[3]))
    setNimed(vastus);
  }
  const sorteeriTahtedeArv = () => {
    const vastus = nimed.toSorted((a ,b) => a.localeCompare(b[3]))
    setNimed(vastus);
  }


    //eesimed 10tk

    
    // sorteeri A-Z
  // sorteeri Z-A
  // tähed kasvavalt
  // tähed kahanevalt
  // neljas täht A-Z
  // sorteeri sõnad arvu järgi

  // filtreeri ????'ga lõppevad
  // vähemalt ???? tähelised
  // täpselt ???? tähelised
  // '????' lühendit sisaldavad
  // kellel on ???'s täht "????"
  // paarisarv tähti sisaldavad
  return (
    <div>Tootajad
      <button onClick={sorteeriAZ}> Sorteeri AZ</button>
      <button onClick={sorteeriZA}> Sorteeri ZA</button>
      <button onClick={sorteeriNeljasTaht}> Sorteeri neljas täht</button>
      <button onClick={sorteeriTahtedeArv}> Sorteeri Tähtede arv</button>


      
    {nimed.map( nimi =>  <div key={nimi}>{nimi}</div>)}
    </div>
  )
}

export default Tootajad