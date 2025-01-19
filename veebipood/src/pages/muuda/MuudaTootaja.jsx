import { Link, useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"
import { useRef } from "react";

function MuudaTootaja() {
  const { index } = useParams(); 
  const leitud = tootajadFailist[index];
  const nimiRef = useRef();
  const telRef = useRef();
  const ametRef = useRef();
  const toostaazRef = useRef();
  const epostRef = useRef();


  const muuda = () =>{
    tootajadFailist[index]= {
      "nimi" : nimiRef.current.value,
      "telefon" : telRef.current.value,
      "amet" : ametRef.current.value,
      "toostaaz" : toostaazRef.current.value,
      "email" : epostRef.current.value,
    }
  }


  return (
    <div>
      <label htmlFor=""> Töötaja:</label>
      <br />
      <label htmlFor=""> Nimi:</label>
      <input ref={nimiRef} type="text" defaultValue={leitud.nimi} /> <br />
      <label htmlFor=""> Telefon:</label>
      <input ref={telRef} type="text" defaultValue={leitud.telefon} /> <br />
      <label htmlFor=""> Amet:</label>
      <input ref={ametRef} type="text" defaultValue={leitud.amet} /> <br />
      <label htmlFor=""> Tööstaaž:</label>
      <input ref={toostaazRef} type="text" defaultValue={leitud.toostaaz} /> <br />
      <label htmlFor=""> E-post:</label>
      <input ref={epostRef} type="text" defaultValue={leitud.email} /> <br />

      <Link to="/halda-tootajad"> 
      <button onClick={muuda}> Muuda </button>
      </Link>
    </div>
  )
}

export default MuudaTootaja