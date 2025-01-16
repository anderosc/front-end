import { Link, useParams } from "react-router-dom";
import tootedData from "../../data/tooted.json"
import { useRef } from "react";

function MuudaToode() {
  const{index} = useParams();
  const leitud = tootedData[index];
  const toodeRef = useRef();

  const muuda = () =>{
    tootedData[index] = toodeRef.current.value;
  }
  return (
    <div>
    <label htmlFor=""> Toode:</label>
    <input ref={toodeRef} type="text" defaultValue={leitud} />
    <Link to="/halda-tooted"> 
    <button onClick={muuda}> Muuda </button>
    </Link>
  </div>
    )
}

export default MuudaToode