import { useState } from 'react'
import esindusedFailist from '../../data/esindused.json';
import { Link } from 'react-router-dom';


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
    const[keskused, setKeskused] = useState(esindusedFailist);


    const sorteeriAZ = () =>{
      const vastus= keskused.toSorted((a ,b) => a.nimi.localeCompare(b.nimi))
        setKeskused(vastus)
    }
    const sorteeriZA = () =>{
      const vastus= keskused.toSorted((a ,b) => b.nimi.localeCompare(a.nimi))
      setKeskused(vastus)
    }
    const sorteeriKolmasTahtAZ = () =>{
      const vastus= keskused.toSorted((a ,b) => b.nimi[2].localeCompare(a.nimi[2]))
      setKeskused(vastus)
    }

    const filtreeri9Tahelised = () =>{
      const vastus= keskused.filter(keskus => keskus.nimi.length === 9)
      setKeskused(vastus)
    }
    const filtreeriNeljasTahtS = () =>{
      const vastus= keskused.filter(keskus => keskus.nimi[3] === "s")
      setKeskused(vastus)
    }

    const filtreeriEgaLoppevad = () => {
      const vastus = keskused.filter(keskus => keskus.nimi.endsWith("e"))
      setKeskused(vastus);
    }
    const arvutaKokku = () => {
      let sum =0;
      // += lühend
      keskused.forEach(keskus => sum = sum + keskus.nimi.length);
      return sum;
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


            <br />
            {keskused.map(keskus => 
            <div key={keskus.nimi}>
              {keskus.nimi}   
              <Link to={"/esindus/" + keskus.nimi}>  <button>Vt lähemalt </button></Link>
            </div>)}

            <div>Tähed kokkku: {arvutaKokku()} </div>
            </div>}

    </div>
  )
}

export default Esindused