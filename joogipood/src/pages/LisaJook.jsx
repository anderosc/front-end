import { useRef } from "react";
import joogidFailist from "../data/joogid.json";

function LisaJook() {
    const jookRef = useRef()

    const lisaUusJook = () => {
            joogidFailist.push(jookRef.current.value)

    }

    return (
        <div>
            <h1>Lisa uus jook</h1>
            <div>
                <label>Sisesta uue joogi nimi:</label>
                <input ref={jookRef} type="text" placeholder="Sisesta jook" />
                <button onClick={lisaUusJook}>Lisa</button>
            </div>
        </div>
    )
}

export default LisaJook;
