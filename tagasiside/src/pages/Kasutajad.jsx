import { useState } from "react";
import kasutajadData from "../kasutajad.json"

function Kasutajad() {
    const [kasutajad, setKasutajad] = useState(kasutajadData);
    const kymmet2hte = () => {
        const vastus = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
        setKasutajad(vastus);
    }
    const kustutaKasutaja = (index) => {
        kasutajadData.splice(index, 1);
        setKasutajad(kasutajadData.slice());
    }
  return (
    <div>
        <div> Kuvatakse {kasutajad.length} kasutajat</div>
        <button onClick={kymmet2hte}>Kuva 10 tähelised kasutajanimed</button>
        <br /><br /><br />
        {kasutajad.map((kasutaja, index) => 
            <div key={kasutaja}>
                <div>NAME:{kasutaja.name} </div>
                <div>USERNAME:{kasutaja.username} </div>
                <div>EMAIL: {kasutaja.email} </div>
                <div>ADDRESS:{kasutaja.address.street} </div>
                <div>{kasutaja.address.suite} </div>
                <div>{kasutaja.address.city} </div>
                <div>{kasutaja.address.zipcode} </div>
                <div>{kasutaja.address.geo.lat} </div>
                <div>{kasutaja.address.geo.lng} </div>
                <div>Telefon: {kasutaja.phone} </div>
                <div>{kasutaja.website} </div>
                <div>{kasutaja.company.name} </div>
                <div>{kasutaja.company.catchPhrase} </div>
                <div>{kasutaja.company.bs} </div>
                <button onClick={() => kustutaKasutaja(index)}> Kustuta kasutaja</button>
            <br /><br />
            </div>
        )}
    </div>
  )
}

export default Kasutajad