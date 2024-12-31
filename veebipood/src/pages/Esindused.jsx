import { useState } from 'react'

// === vasak ja parem identsed
// =  väärtuse andmine
// == identsuse kontroll lma tüübi kontrollita

function Esindused() {
    //    muutuja, muutja
    const [linn, setLinn] = useState("Pärnu");
  return (
    <div>
        <button  className={linn === "Tallinn" ? 'linn-aktiivne': undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
        <button className={linn === "Tartu" ? 'linn-aktiivne': undefined}  onClick={() => setLinn("Tartu")}> Tartu </button>
        <button className={linn === "Narva" ? 'linn-aktiivne': undefined}  onClick={() => setLinn("Narva")}>Narva</button>
        <button className={linn === "Pärnu" ? 'linn-aktiivne': undefined}  onClick={() => setLinn("Pärnu")}>Pärnu</button>

        <br /><br />
        <div>Hetkel aktiivne linn: {linn}</div>

        <br /><b></b>



        {linn === "Pärnu" && <div> Port Artur 2</div>}
        {linn === "Narva" && <div> Fama</div>}
        {linn === "Tallinn" && <div> 
            <div>Kristiine</div>
            <div>Ülemiste</div>
            <div>Rocca</div>
            <div>Magistral</div>
            <div>Järveotsa</div>
            </div>}


    </div>
  )
}

export default Esindused