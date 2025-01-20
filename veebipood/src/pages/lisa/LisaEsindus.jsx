import { useRef} from 'react';
import esindusedFailist from '../../data/esindused.json';
import { ToastContainer, toast } from 'react-toastify';

function LisaEsindus() {
    const esindusRef = useRef();
    const telRef = useRef();
    const aadressRef = useRef();
    // const [sonum, setSonum] = useState("");

    const lisa = () => {
        if (esindusRef.current.value === "") {
            // setSonum("Tühja nimega ei saa esindust sisestada!");
            toast.error("Tühja nimega ei saa esindust sisestada!");
            return;
          } 
          if (telRef.current.value === "") {
            // setSonum("Tühja telefoniga ei saa esindust sisestada!");
            toast.error("Tühja telefoniga ei saa esindust sisestada!");
            return;
          } 
          if (aadressRef.current.value === "") {
            // setSonum("Tühja aadressiga ei saa esindust sisestada!");
            toast.error("Tühja aadressiga ei saa esindust sisestada!");
            return;
          }
        const esindus =  {
            "nimi": esindusRef.current.value, 
            "tel" : telRef.current.value, 
            "aadress": aadressRef.current.value
          }
        esindusedFailist.push(esindus);
        esindusRef.current.value = "";
        telRef.current.value = "";
        aadressRef.current.value = "";
        toast.success("Edukalt esindus lisatud!");
    };

    return (
        <div>
          {/* <div>{undefined.toUpperCase()}</div>  --> Kui usestate on tühi. */}
          {/* <div>{sonum.toUpperCase()}</div>  */}

            <label>Esindus</label> <br />
            <input ref={esindusRef} type="text" /> <br />
            <label>Telefon</label> <br />
            <input ref={telRef} type="text" /> <br />
            <label>Aadress</label> <br />
            <input ref={aadressRef} type="text" /> <br />
            <button onClick={lisa}>Lisa</button> <br />

            <ToastContainer 
            position="top-left"
            autoClose={4000}
            theme="dark"
            closeOnClick
            />

        </div>
    );
}

export default LisaEsindus;
