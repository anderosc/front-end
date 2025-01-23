import { useRef } from "react";
//import kasutajadFailist from "../../data/kasutajad.json"


function Registeeru() {
    const emailRef = useRef();
    const paroolRef = useRef();
    const nimiRef = useRef();

    const registeeru = () =>{
        const kasutaja = {
            "email": emailRef.current.value,
            "parool": paroolRef.current.value,
            "nimi" : nimiRef.current.value
        }; 
        // kasutajadFailist.push(kasutaja)
        const kasutajadLS = JSON.parse(localStorage.getItem("kasutajad")) || [];
        kasutajadLS.push(kasutaja);
        localStorage.setItem("kasutajad", JSON.stringify(kasutajadLS));
    }

  return (
    <div>
        <label htmlFor="">Email:</label>
        <input ref={emailRef} type="text" /><br />
        <label htmlFor=""> Parool:</label>
        <input ref={paroolRef} type="password" /><br />
        <label htmlFor="">Nimi:</label>
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={registeeru}>Registeeru</button>
    </div>
  )
}

export default Registeeru