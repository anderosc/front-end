import { useRef, useState } from 'react'

function Avaleht() {
  const [sisselogitud, muudaSisselogitud] = useState("ei")
  // const [loginout, muudaloginout] = useState("Logi sisse")
const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const[sonum, muudaSonum] = useState("")

    const logiSisse = () => {
      if(paroolRef.current.value === "123"){
        muudaSisselogitud("jah")
        muudaSonum("Tere tulemast, " + kasutajaNimiRef.current.value)
      } else {
        muudaSonum("Vale parool")
      }
    }
  
    const logiValja = () => { 
      muudaSisselogitud("ei");
      muudaSonum("");
    }
  
  return (
    <> 
    <div>Avaleht</div>
    <br />
    <br />
    <br />
    <div className='App'> 

      <div>{sonum}</div>
    
        {sisselogitud === "ei" && <div>
      <div>Kasutajanimi</div>
      <input ref={kasutajaNimiRef} type="text" /> <br />
      <div>Parool</div>
      <input ref={paroolRef} type="password" />
      </div> }


    {sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
    {sisselogitud === "jah" && <button onClick={logiValja}>Logi Välja</button>}

    </div>

    </>
  )
}

export default Avaleht