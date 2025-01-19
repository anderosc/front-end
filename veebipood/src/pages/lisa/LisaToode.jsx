import {useRef, useState } from 'react'
import tootedData from "../../data/tooted.json"


function LisaToode() {
    const[sonum, setSonum] = useState("Sisesta toode!");
    const nimiRef = useRef();
    const hindRef = useRef();
    const piltRef = useRef();

    const lisa = () => {
        if(nimiRef === ""){
            setSonum("Nimi on puudu");
            return;
        }
        if(hindRef === ""){
            setSonum("Hind on puudu");
            return;
        }
        if(piltRef === ""){
            setSonum("Pilt on puudu");
            return;
        }

        const toode = {
            "nimi" : nimiRef.current.value,
            "hind" : hindRef.current.value,
            "pilt" : piltRef.current.value,
            "aktiivne" : true,
        }
        tootedData.push(toode);
        nimiRef.current.value = "";
        hindRef.current.value = "";
        piltRef.current.value = "";
    };
            //push() faili
            // VÕTMED ---> toode ={nimi : "Nobe", "hind" : 20000 , "aktiivne" : true , "pilt" : "http://....jpg"}
            //pilt URL-st .jpg  lõpuga
        
        
    
  return (
    <div>
            <div>{sonum}</div>
            <label>Toote nimi:</label> <br />
            <input ref={nimiRef} type="text" /> <br />
            <label>Toote hind:</label> <br />
            <input ref={hindRef} type="text" /> <br />
            <label>Toote url pilt .jpg:</label> <br />
            <input ref={piltRef} type="text" /> <br />
            <button onClick={ lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode
