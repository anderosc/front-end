import { Link, useParams } from "react-router-dom";
import pildidFailist from "../../data/pildid.json"
import { useRef } from "react";

function MuudaPilt() {
  const{index} = useParams();
  const leitud = pildidFailist[index];
 const pealkiriRef = useRef();
    const urlRef = useRef();
    const sisuRef = useRef();  

  const muuda = () =>{
    pildidFailist[index] = {
      "url" : urlRef.current.value,
      "pealkiri" : pealkiriRef.current.value, 
      "sisu" : sisuRef.current.value 
    }
  }

  return (
    <div>
        <div>
      <label> Pilt:</label>
      <div> <img src={leitud.url} style={{ width: '200px', height: '200px' }}  alt="" /> </div>

      <label>Pildi url:</label> <br />
      <input ref={urlRef} type="text"  defaultValue={leitud.url}/> <br />
      <label>Pealkir:</label> <br />
      <input ref={pealkiriRef} type="text" defaultValue={leitud.pealkiri} /> <br />
      <label>Sisu:</label> <br />
      <input ref={sisuRef} type="text" defaultValue={leitud.sisu}/> <br />

      <Link to="/halda-pildid"> 
      <button onClick={muuda}> Muuda </button>
      </Link>
    </div>
    </div>
  )
}

export default MuudaPilt