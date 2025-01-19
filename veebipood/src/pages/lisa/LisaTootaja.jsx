import { useRef, useState } from 'react';
import tootajadFailist from '../../data/tootajad.json';

function LisaTootaja() {
    //võtmed --> Nimi, telefon, amet (ja võib juurde pann)
    // .push()
    const nimiRef = useRef();
    const telefonRef = useRef();
    const ametRef = useRef();
    const [sonum, setSonum] = useState();


    const lisa = () => {
        if(nimiRef === ""){
            setSonum("Nimi on puudu");
            return;
        }
        if(telefonRef === ""){
            setSonum("Telefoni number on puudu");
            return;
        }
        if(ametRef === ""){
            setSonum("Amet on puudu");
            return;
        }

        const stringLopp = "@veebipoord.ee"
        const tootaja = {
            "nimi" : nimiRef.current.value,
            "telefon" : telefonRef.current.value,
            "amet" : ametRef.current.value,
            "toostaaz" : 1,
            "email" : nimiRef.current.value + stringLopp
        }
        tootajadFailist.push(tootaja);
        nimiRef.current.value = "";
        telefonRef.current.value = "";
        ametRef.current.value = "";
    };

    return (
        <div>
            <div>{sonum}</div>
            <label>Töötaja nimi:</label> <br />
            <input ref={nimiRef} type="text" /> <br />
            <label>Töötaja telefon:</label> <br />
            <input ref={telefonRef} type="text" /> <br />
            <label>Töötaja amet:</label> <br />
            <input ref={ametRef} type="text" /> <br />
            <button onClick={ lisa}>Lisa</button> <br />
        </div>
    );
}

export default LisaTootaja;