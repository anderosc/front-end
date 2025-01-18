import { useParams } from 'react-router-dom'
import pildidFailist from "../../data/pildid.json"

function YksPilt() {
  const {leht} = useParams();
  const leitud = pildidFailist.find(pilt => pilt.url === leht);
  
  if (leitud === undefined){
    return <div> Pilti ei leitud</div>
}

  return (
    <div>
      <img src={leitud.url} alt="" />
      
    </div>
  )
}

export default YksPilt