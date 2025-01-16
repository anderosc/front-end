import { Link, useParams } from "react-router-dom";
import pildidFailist from "../../data/pildid.json"
import { useRef } from "react";

function MuudaPilt() {
  const{index} = useParams();
  const leitud = pildidFailist[index];
  const pildidRef = useRef();

  const muuda = () =>{
    pildidFailist[index] = pildidRef.current.value;
  }

  return (
    <div>
        <div>
      <label htmlFor=""> Pilt:</label>
      <div>{leitud}</div>
      <input ref={pildidRef}  />
      <Link to="/halda-pildid"> 
      <button onClick={muuda}> Muuda </button>
      </Link>
    </div>
    </div>
  )
}

export default MuudaPilt