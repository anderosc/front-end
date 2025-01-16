import { useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"


function YksTootaja() {
  const {i} =useParams();
  const tootaja = tootajadFailist[i]

  if(tootaja === undefined){
    return <div> Töötajat ei leitud </div>
  }

  return (
    <div>
    <div>{tootaja}</div>
   </div>
  )
}

export default YksTootaja