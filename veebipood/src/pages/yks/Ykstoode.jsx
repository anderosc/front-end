import { useParams } from "react-router-dom";
import tootedData from "../../data/tooted.json"

function Ykstoode() {
  const {nimi} =useParams();
  const leitud = tootedData.find(toode => toode.nimi === nimi)

  if(leitud === undefined){
    return <div> Toodet ei leitud </div>
  }

  return (
    <div>
    <div>{leitud.nimi}</div>
    <div>Hind: {leitud.hind}</div>
    <div> <img style={{ width: '400px', height: '300px' }}  src={leitud.pilt} alt="" /></div>

   </div>
   )
}

export default Ykstoode