import { useRef, useState } from "react";
import kasutajadFailist from "../../data/kasutajad.json"
import {useNavigate} from "react-router-dom"

function Login() {
    // const kasutajad = kasutajadFailist;
    const emailRef = useRef();
    const paroolRef = useRef();
    const [sonum, setSonum] = useState();
    const navigate = useNavigate();

    const login = () =>{ // find otsib mingi omaduse järgi terve objekti üles. Filter jätab alles array kellel kõigil on true
        // jätab alles ühe kellel on true
        const leitud = kasutajadFailist.find(kasutaja => kasutaja.email === emailRef.current.value);
        if (leitud === undefined){
            setSonum("Sellise emailiga kasutajat ei leitud");
            return; //lõpetab funktsiooni
        }
        if(leitud.parool !== paroolRef.current.value){
            setSonum("Parool õige!")
            return;
        }
        // setSonum("Edukalt sisse logitud!!");
        // window.location.href = "/halda-kasutajaid" //reactis ei kasutata kuna teeb refreshi, moistlik reacti väliste lehtedele liikumiseks
        navigate("/halda-kasutajad");
    }

  return (
    <div>
        <div>{sonum}</div>
         <label htmlFor="">Email:</label>
        <input ref={emailRef} type="text" /><br />
        <label htmlFor=""> Parool:</label>
        <input ref={paroolRef} type="password" /><br />
        <button onClick={login}>Login</button>

    </div>
  )
}

export default Login