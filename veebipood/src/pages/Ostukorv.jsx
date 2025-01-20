import { useState } from "react"
// import ostukorvFailist from "../data/ostukorv.json"
// Array - mitme väärtuse hoidmiseks [ , , , , ] komaga eraldatud väärtused
// element - üks väärtus array sees

// array elementidega operatsioonide tegemiseks tuleb kasutada tsüklit
//   - HTMLs välja näitamine  .map()
//   - kokkuarvutamine     .forEach()
//   - filtreerimine     .filter()
//   - sorteerimine      .sort()

//key={} on alati htmlis .map, vahetult simese tagi küljes
//see võimaldab reactil meelde jätta elemente, et kui toimub rerenderus
//siis ei pea ueusti seda tsüklit tegema
// sd
//rerenderus --> iga kui kord läheb useState set funktsioon käima
//renderdus -- html väljakuvamine/printimine, koodi näitamine, brauseris

function Ostukorv() {
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []) // <---- json.parse tuleb localstoagest
  
  const KustutaToode = (index) => {
    tooted.splice(index,1),
    setTooted(tooted.slice()) //HTML uuendamiseks, tooted lehel ei olnud seda vaja, sest me ei muutnud htmli
    localStorage.setItem("ostukorv", JSON.stringify(tooted)); //LS uuenduseks
  }


  const arvutaKokku= () => {
    let summa = 0;
    //foreach käib kõik objektd ns läbi
    //praegu anname iga tsükli iteratsioon summa muutujale uue väärtuse
    //summa = 0;
    //({Nobe, hind: 12} => 12 = 0 + 12);
    //summa = 12;
    //({BMW, hind: 51} => 63 = 12  + 51);
    //summa = 63;
    tooted.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  return (
    <div>
     
      {tooted.length=== 0 && <div>Ostukorv on tyhi</div>}
      
      {tooted.length > 0 &&
      <> 
      <div> Kokku: {tooted.length} </div>
      <button onClick={() => setTooted([])} >tühjenda</button>
      </>}
       
      {tooted.map((toode, index) => 
        <div key={index}>
           {index +1}. {toode.nimi} - {toode.hind}€
            <button onClick={() => KustutaToode(index)}>x</button>
        </div>)}

        {tooted.length > 0 && <div> {arvutaKokku()} € </div>}
    </div>
  )
}

export default Ostukorv