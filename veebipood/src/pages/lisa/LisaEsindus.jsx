import { useRef, useState } from 'react';
import esindusedFailist from '../../data/esindused.json';

function LisaEsindus() {
    const esindusRef = useRef();
    const telRef = useRef();
    const aadressRef = useRef();
    const [sonum, setSonum] = useState();

    const lisa = () => {
        if (esindusRef.current.value === "") {
            setSonum("Tühja nimega ei saa esindust sisestada!");
            return;
          } 
          if (telRef.current.value === "") {
            setSonum("Tühja telefoniga ei saa esindust sisestada!");
            return;
          } 
          if (aadressRef.current.value === "") {
            setSonum("Tühja aadressiga ei saa esindust sisestada!");
            return;
          }
        const esindus =  {
            "nimi": esindusRef.current.value, 
            "tel" : telRef.current.value, 
            "aadress": aadressRef.current.value}
        esindusedFailist.push(esindus);
        esindusRef.current.value = "";
        telRef.current.value = "";
        aadressRef.current.value = "";
    };

    return (
        <div>
            <label>Esindus</label> <br />
            <input ref={esindusRef} type="text" /> <br />
            <label>Telefon</label> <br />
            <input ref={telRef} type="text" /> <br />
            <label>Aadress</label> <br />
            <input ref={aadressRef} type="text" /> <br />
            <button onClick={lisa}>Lisa</button> <br />
        </div>
    );
}

export default LisaEsindus;
