import { useRef } from 'react';
import tootajadFailist from '../../data/tootajad.json';

function LisaTootaja() {
    //võtmed --> Nimi, telefon, amet (ja võib juurde pann)
    // .push()
    const tootajaRef = useRef();

    const lisa = () => {
        tootajadFailist.push(tootajaRef.current.value);
        tootajaRef.current.value = "";
    };

    return (
        <div>
            <label>Töötaja</label> <br />
            <input ref={tootajaRef} type="text" /> <br />
            <button onClick={() => lisa}>Lisa</button> <br />
        </div>
    );
}

export default LisaTootaja;