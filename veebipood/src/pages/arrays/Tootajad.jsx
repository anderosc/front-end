import { useState } from "react"
import TootajadData from '../../data/tootajad.json'

function Tootajad() {

  const [nimed, setNimed] = useState(TootajadData)
  
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
  const sorteeriTahtedeArvKasvavalt = () => {
    const vastus = nimed.toSorted((a ,b) => a.length - b.length)
    setNimed(vastus);
  }
  const sorteeriTahtedeArvKahanevalt = ()  => {
    const vastus = nimed.toSorted((a,b) => b.length - a.length)
    setNimed(vastus)
  }

  //filtreerimine
  const filtreeriIgaLoppevad = () => {
    const vastus = nimed.filter( nimi => nimi.endsWith("i"))
    setNimed(vastus)
  }
  const filtreeri5Tahelised = () => {
    const vastus = nimed.filter(nimi => nimi.length >= 5 )
    setNimed(vastus)
  }
  const filtreeri5Tahelised2 = () => {
    const vastus = nimed.filter(nimi => nimi.length === 5 )
    setNimed(vastus)
  }
  const filtreeriSisaldabMaLyhendit = () => {
    const vastus = nimed.filter(nimi => nimi.includes("Ma", "ma"))
    setNimed(vastus)
  }
  const filtreeriAT2htTeiselKohal = () => {
    const vastus = nimed.filter(nimi => nimi.charAt(1)==="a")
    setNimed(vastus)
  }

  const filtreeriPaarisArvT2hti = () => {
    const vastus = nimed.filter(nimi => nimi.length % 2 === 0)
    setNimed(vastus)
  }


  return (
    <div>Töötajad
      <br />
      <div> Tööajate arv kokku: {nimed.length} </div>
      <br />
      <div>Sorteeri:</div>
      <button onClick={sorteeriAZ}>  A-Z</button>
      <button onClick={sorteeriZA}>  Z-A</button>
      <button onClick={sorteeriNeljasTaht}>  Neljas täht</button>
      <button onClick={sorteeriTahtedeArvKasvavalt}>  Tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahtedeArvKahanevalt}>  Tähtede arv kahanevalt</button>
      <br />
      <div>Filtreeri</div>
      <button onClick={filtreeriIgaLoppevad}> i-ga lõppevad </button>
      <button onClick={filtreeri5Tahelised}> vähemalt 5 tähelised </button>
      <button onClick={filtreeri5Tahelised2}> ainult 5 tähelised </button>
      <button onClick={filtreeriSisaldabMaLyhendit}> sisaldab ma lühendit </button>
      <button onClick={filtreeriAT2htTeiselKohal}> A täht teisel kohal </button>
      <button onClick={filtreeriPaarisArvT2hti}> Paarisarv tähti</button>
      
    {nimed.map( nimi =>  <div key={nimi}>{nimi}</div>)}

    </div>
  )
}

export default Tootajad