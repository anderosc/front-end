import { useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"


function YksTootaja() {
  const {nimi} =useParams();
  const leitud = tootajadFailist.find(tootaja => tootaja.nimi === nimi)

  if(leitud === undefined){
    return <div> Töötajat ei leitud </div>
  }

  return (
    <div>
      <br />
      <br />
      
    <div>Nimi: {leitud.nimi}</div>
    <div>Telefon: {leitud.telefon}</div>
    <div>Amet: {leitud.amet}</div>
    <div>Tööstaaž: {leitud.toostaaz} aastat</div>
    <div>Email: {leitud.email}</div>

   </div>
  )
}

export default YksTootaja