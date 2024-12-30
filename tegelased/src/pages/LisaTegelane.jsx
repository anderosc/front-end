import { useRef, useState } from 'react'

function LisaTegelane() {
    const [sonum, uuendaSonum] = useState("Sisesta tegelase nimi");
    const tegelaneRef = useRef();  //can be also nimiRef = useRef ()

    function lisaUusTegelane(){
       
        if(tegelaneRef.current.value === ""){
            uuendaSonum ("Lahtrs puudub nimi!");
        }else {
            uuendaSonum ("Tegelane lisatud!");
        }
    

    }

  return (

    <div>
        <div>{sonum}</div>
        <label> Tegelase nimi </label> <br />
        <input ref={tegelaneRef} type="text" /> <br />  
        <button onClick={lisaUusTegelane}>Lisa uus</button> <br />
    </div>
   
  )
}

export default LisaTegelane