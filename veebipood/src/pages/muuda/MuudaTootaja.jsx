import { Link, useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"
import { useRef } from "react";

function MuudaTootaja() {
  const{index} = useParams();
  const leitud = tootajadFailist[index];
  const tootajaRef = useRef();

  const muuda = () =>{
    tootajadFailist[index] = tootajaRef.current.value;
  }

  return (
    <div>
      <label htmlFor=""> Töötaja:</label>
      <input ref={tootajaRef} type="text" defaultValue={leitud} />
      <Link to="/halda-tootajad"> 
      <button onClick={muuda}> Muuda </button>
      </Link>
    </div>
  )
}

export default MuudaTootaja