import { Link, useParams } from "react-router-dom";
import tootedData from "../../data/tooted.json"
import { useRef } from "react";

function MuudaToode() {
  const{index} = useParams();
  const leitud = tootedData[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();


  const muuda = () =>{
    tootedData[index]= {
      "nimi" : nimiRef.current.value,
      "hind" : hindRef.current.value,
      "pilt" : piltRef.current.value,
      "aktiivne" : true
    }
  }
  return (
    <div>
    <label htmlFor=""> Toode:</label>
    <input ref={nimiRef} type="text" defaultValue={leitud.nimi} /> <br />
    <label htmlFor=""> Hind:</label>
    <input ref={hindRef} type="text" defaultValue={leitud.hind} /> <br />
    <label htmlFor=""> Pilt:</label>
    <input ref={piltRef} type="text" defaultValue={leitud.pilt} /> <br />

    <Link to="/halda-tooted"> 
    <button onClick={muuda}> Muuda </button>
    </Link>
  </div>
    )
}

export default MuudaToode