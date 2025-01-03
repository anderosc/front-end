import { useState } from "react"
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

//rerenderus --> iga kui kord läheb useState set funktsioon käima
//renderdus -- html väljakuvamine/printimine, koodi näitamine, brauseris

function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"])
  return (
    <div>
      <div> Kokku: {tooted.length} </div>
      <button onClick={() => setTooted([])} >tühjenda</button>
      {tooted.map(toode => <div key={toode}> {toode} <button>x</button> </div>)}
    </div>
  )
}

export default Ostukorv