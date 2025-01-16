import { useParams } from "react-router-dom";
import tootajadData from "../../data/tooted.json"

function Ykstoode() {
  const {i} =useParams();
  const tootaja = tootajadData[i]

  if(tootaja === undefined){
    return <div> Töötajat ei leitud </div>
  }
  return (
    <div>
    <div>{tootaja}</div>
   </div>
   )
}

export default Ykstoode