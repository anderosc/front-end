import { useState, useRef } from "react";
import joogidFailist from "../data/joogid.json";

function HaldaJoogid() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);
    const jookRef = useRef();

    const kustuta = (index) => {
        joogidFailist.splice(index, 1)
        uuendaJoogid(joogidFailist.slice())
    }


    const lisaUusJook = () => {
            joogidFailist.push(jookRef.current.value); 
            uuendaJoogid(joogidFailist.slice()); 
            jookRef.current.value = ""
        
    }

    return (
        <div>
            <h1>Halda Joogid</h1>
            <div>
                {joogid.map((jook, index) => (
                    <div key={index}>
                        {jook} 
                        <button onClick={() => kustuta(index)}>x</button>
                    </div>
                ))}
            </div>
            <div>
                <label>Lisa uus jook:</label>
                <input ref={jookRef} type="text" />
                <button onClick={lisaUusJook}>Lisa</button>
            </div>
        </div>
    )
}

export default HaldaJoogid;
