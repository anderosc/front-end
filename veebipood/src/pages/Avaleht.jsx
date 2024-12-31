//rfc
import { useState } from 'react'

//
export default function Avaleht() {
  const [kogus, setKogus] = useState(1);
  const [sonum, setSonum] = useState("Uueda kogust");
  const [laigitud, setLaigitud] = useState(false);

  function nulli() {
    setKogus(0);
    setSonum("Kogus on nullitud")

  }

  function vahenda(){
setKogus(kogus-1);
setSonum("Kogus vähendatud")
  }

  function suurenda() {
    setKogus(kogus+1);
    setSonum("Kogus suurendatud")

  }

  


  return (
    <div>

      {laigitud === true && <img src="/laigitud.svg" alt="" />}
     { laigitud === false && <img src="/mitte-laigitud.svg" alt="" />}
     <button onClick={() => setLaigitud(!laigitud)}> Muuda likei</button>
      <div>{sonum}</div>
      
      <br />
      {kogus > 0 && <button onClick={nulli}>Nulli kogus</button> }
      <br />
      <button disabled={kogus === 1} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}
