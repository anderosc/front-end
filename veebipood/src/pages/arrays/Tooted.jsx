import { useState } from "react"

function Tooted() {

  const [tooted, setTooted] = useState (["Nobe", "BMW", "Tesla", "Toyota", "Nissan", "Bently", "Audi", "Mercedes"]);

    //Nobe, BMW, tesla, Toyota, Nissan, Bently, Audi, Mercedes

  // kellel on 2 täht "e"
  // paarisarv tähti sisaldavad

    const sorteeriAZ = () => {
      const vastus = tooted.toSorted((a, b) => a.localeCompare(b))
      setTooted(vastus)
    }
    const sorteeriZA = () => {
      const vastus = tooted.toSorted((a, b) => b.localeCompare(a))
      setTooted(vastus)
    }
    const sorteeriTahtedeArvKasvavalt = () => {
      const vastus = tooted.toSorted((a ,b) => a.length - b.length)
      setTooted(vastus);
    }
    const sorteeriTahtedeArvKahanevalt = ()  => {
      const vastus = tooted.toSorted((a,b) => b.length - a.length)
      setTooted(vastus)
    }
    const sorteeriTeineTaht = () => {
      const vastus = tooted.toSorted((a ,b) => a.localeCompare(b[1]))
      setTooted(vastus);
    }
    //filtreerimine

    const filtreeriNgaAlgavad = () =>{
      const vastus = tooted.filter(toode =>toode.startsWith("N"))
      setTooted(vastus)
    }
    const filtreeriBgaAlgavad = () =>{
      const vastus = tooted.filter(toode =>toode.startsWith("B"))
      setTooted(vastus)
    }
    const filtreeriTgaAlgavad = () =>{
      const vastus = tooted.filter(toode =>toode.startsWith("T"))
      setTooted(vastus)
    }
    const nulli = () => {
      setTooted(tooted)
    }
    const filtreeriKuniNeljaT2helised = () =>{
      const vastus = tooted.filter(toode =>toode.length <= 4)
      setTooted(vastus)
    }
    const filtreeriKuueT2helised = () =>{
      const vastus = tooted.filter(toode =>toode.length === 6)
      setTooted(vastus)
    }
    const filtreeriEsLyhenditSisaldavad = () =>{
      const vastus = tooted.filter(toode =>toode.includes("es"))
      setTooted(vastus)
    }

    const filtreeriPaarisArvT2hed = () =>{
      const vastus = tooted.filter(toode =>toode.length % 2 === 0)
      setTooted(vastus)
    }




  return (
    <div>Tooted
      <br />
      <button onClick={nulli} > Taasta toodete nimekiri </button>
      <div>Tooted kokku: {tooted.length} </div>
      <br />
      <button onClick={sorteeriAZ}>  A-Z</button>
      <button onClick={sorteeriZA}>  Z-A</button>
      <button onClick={sorteeriTeineTaht}>  Teine täht A-Z</button>
      <button onClick={sorteeriTahtedeArvKasvavalt}>  Tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahtedeArvKahanevalt}>  Tähtede arv kahanevalt</button>
      <br />
      <div>Filtreeri</div>
      <button onClick={filtreeriNgaAlgavad}> N-ga lalgavad </button>
      <button onClick={filtreeriBgaAlgavad}> B-ga lalgavad </button>
      <button onClick={filtreeriTgaAlgavad}> T-ga lalgavad </button>
      <button onClick={filtreeriKuniNeljaT2helised}> Kuni nelja tähelised </button>
      <button onClick={filtreeriKuueT2helised}> Täpselt 6 tähelised </button>
      <button onClick={filtreeriEsLyhenditSisaldavad}> es Lühendit sisaldavad </button>
      <button onClick={filtreeriPaarisArvT2hed}> Paarisarv tähti </button>

 

      <br />
      {tooted.map(toode =>  <div key={toode}> {toode} </div>)}
      


    </div>
  )
}

export default Tooted