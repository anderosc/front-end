import { Link, useParams } from "react-router-dom";
import pildidFailist from "../../data/pildid.json"
import { useRef } from "react";

function MuudaPilt() {
  const{index} = useParams();
  const leitud = pildidFailist[index];
  const piltRef = useRef();

  const muuda = () =>{
    pildidFailist[index] = {
      "url" : piltRef.current.value
    }
  }

  return (
    <div>
        <div>
      <label htmlFor=""> Pilt:</label>
      <div> <img src={leitud.url} alt="" /> </div>
      <input ref={piltRef}  />
      <Link to="/halda-pildid"> 
      <button onClick={muuda}> Muuda </button>
      </Link>
    </div>
    </div>
  )
}

export default MuudaPilt