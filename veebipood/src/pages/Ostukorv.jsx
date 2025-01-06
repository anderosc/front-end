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
  const KustutaToode = (index) => {
    tooted.splice(index,1),
    setTooted(tooted.slice())
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
        <div key={toode}>
           {index +1}. {toode} 
            <button onClick={() => KustutaToode(index)}>x</button>
        </div>)}
    </div>
  )
}

export default Ostukorv