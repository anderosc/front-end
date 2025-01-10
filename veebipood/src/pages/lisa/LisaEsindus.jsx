import { useRef } from 'react';
import esindusedFailist from '../../data/esindused.json';

function LisaEsindus() {
    const esindusRef = useRef();

    const lisa = () => {
        esindusedFailist.push(esindusRef.current.value);
        esindusRef.current.value = "";
    };

    return (
        <div>
            <label>Esindus</label> <br />
            <input ref={esindusRef} type="text" /> <br />
            <button onClick={lisa}>Lisa</button> <br />
        </div>
    );
}

export default LisaEsindus;
