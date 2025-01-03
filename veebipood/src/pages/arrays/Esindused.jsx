import { useState } from 'react'

// === vasak ja parem identsed
// =  väärtuse andmine
// == identsuse kontroll lma tüübi kontrollita

//array peab tegema:
//1. kui tuleb andmebaasist
//2. kui tahan filtreerimisi, sorteerimis voi muid muudatusi
//array voiks teha
// kUI pidevalt pean koguaeg andmeid muutma, sest siis saan kõigile korraga muuta
//Kui andmeid palju >10-15

function Esindused() {
    //    muutuja, muutja
    const [linn, setLinn] = useState("Tallinn");
    const[keskused, setKeskused] = useState(["Ülemiste", "Rocca al Mare", "Magistral", "Vesse", "kristiine", "Järveotsa"]);


    const sorteeriAZ = () =>{
      const vastus= keskused.toSorted((a ,b) => a.localeCompare(b))
        setKeskused(vastus)
    }
    const sorteeriZA = () =>{
      const vastus= keskused.toSorted((a ,b) => b.localeCompare(a))
      setKeskused(vastus)
    }
    const sorteeriKolmasTahtAZ = () =>{
      const vastus= keskused.toSorted((a ,b) => b[2].localeCompare(a[2]))
      setKeskused(vastus)
    }

    const filtreeri9Tahelised = () =>{
      const vastus= keskused.filter(keskus => keskus.length === 9)
      setKeskused(vastus)
    }
    const filtreeriNeljasTahtS = () =>{
      const vastus= keskused.filter(keskus => keskus[3] === "s")
      setKeskused(vastus)
    }

    const filtreeriEgaLoppevad = () => {
      const vastus = keskused.filter(keskus => keskus.endsWith("e"))
      setKeskused(vastus);
    }


  return (
    <div>
        <button  className={linn === "Tallinn" ? 'linn-aktiivne': undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
        <button className={linn === "Tartu" ? 'linn-aktiivne': undefined}  onClick={() => setLinn("Tartu")}> Tartu </button>
        <button className={linn === "Narva" ? 'linn-aktiivne': undefined}  onClick={() => setLinn("Narva")}>Narva</button>
        <button className={linn === "Pärnu" ? 'linn-aktiivne': undefined}  onClick={() => setLinn("Pärnu")}>Pärnu</button>

        <br /><br />
        <div>Hetkel aktiivne linn: {linn}</div>

        <br /><b></b>



        {linn === "Pärnu" && <div> Port Artur 2</div>}
        {linn === "Narva" && <div> Fama</div>}
        {linn === "Tallinn" && <div> 
          <div> Keskuste arv kokku: {keskused.length} </div>
          <button onClick={sorteeriAZ} > Sorteeri A-Z</button>
          <button onClick={sorteeriZA}>Sorteeri Z-A </button>
          <button onClick={sorteeriKolmasTahtAZ}>Sorteeri Kolmas Täht </button>

          <button onClick={filtreeriEgaLoppevad} >Fltreeri e-ga lõppevad </button>
          <button onClick={filtreeri9Tahelised} >Fltreeri 9-tähelised </button>
          <button onClick={filtreeriNeljasTahtS} >Fltreeri neljas täht S </button>



            {keskused.map(keskus => <div key={keskus}>{keskus}</div>)}
            </div>}

    </div>
  )
}

export default Esindused