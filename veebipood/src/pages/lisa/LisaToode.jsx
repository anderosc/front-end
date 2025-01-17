import {useRef, useState } from 'react'


function LisaToode() {
    const[sonum, setSonum] = useState("Sisesta toode!");
    const nimiRef = useRef(); //inputi seest andmete kättesaamine

    function sisesta(){
        if (nimiRef.current.value === "") {
            
            setSonum("Tühja nimega ei saa toodet sisestada");
            return;
        } else {
            setSonum("Toode isestatud!");
            //push() faili
            // VÕTMED ---> toode ={nimi : "Nobe", "hind" : 20000 , "aktiivne" : true , "pilt" : "http://....jpg"}
            //pilt URL-st .jpg  lõpuga
        }
        
    }
  return (
    <div>
        <div>{sonum}</div>
        <label> Toote nimi </label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={sisesta}> Sisesta</button> <br />  
    </div>
  )
}

export default LisaToode
