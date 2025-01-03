import { useState } from "react"

// JavaScriptis on 3 tüüpi väärtusi:
// number -> teha arvutusi, teha võrdusi kas on suurem/väiksem
//          kogus, kogusumma
// string (sõna) -> saan funktsioone kasutada .includes(), .endsWith()
//          isikukood, postiindeks, telefoninumber, maksmisel erinevad staadiumid
// boolean -> kahendväärus. true/false. "y"/"n". eriomadus: keerata teistpidi hüüumärgi abil
//          makstud, registreerunud, sisselogitud, täisealine

// array-d --> üks tüüp sees
// ["Coca", "Fanta", "Sprite"]
// objektid
// {nimi: "Coca", hind: 99, aktiivne: true}

function Hinnad() {
    const[hinnad, setHinnad] = useState([245, 673, 58, 9, 310, 486, 7, 531, 86, 192])
//const abil loon uusi muutujaid, mille sisse panen võrdusmärgiga väärtusi
    const filtreeriSuuremKui100 = () => {

        const vastus = hinnad.filter(hind => hind > 100)
        setHinnad(vastus);
        // seda on vaja ---- setHinnad([245, 673, 310, 486, 531, 192]);
}

        const sorteeriKahanevalt = () => {
           
            hinnad.sort((a,b) => b - a)
            setHinnad(hinnad.slice())
        }
        const sorteeriKasvavalt = () => {
            const vastus = hinnad.toSorted((a,b) => a-b);            
            setHinnad(vastus)
        }

  return (
    <div>
                  <div> Hindade arv kokku:: {hinnad.length} </div>

        <button onClick={sorteeriKasvavalt}> Sorteeri kasvavalt </button>
        <button onClick={sorteeriKahanevalt}> Sorteeri kahanevalt </button>


        <button onClick={ filtreeriSuuremKui100} >  Jäta alles suuremad kui 100</button>
        {hinnad.map(hind => <div key={hind} > {hind} </div>)}
    </div>
  )
}

export default Hinnad