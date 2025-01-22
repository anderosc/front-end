import { useState } from "react";

function Avaleht() {
  const tegelased = [
    { eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland" },
    { eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland" },
    { eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Wood" },
    { eesnimi: "Roo", perenimi: "Kangroo", elukoht: "Hundred Acre Wood" },
    { eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal Cove" },
  ];
  
  const [klikitudNimi, uuendaKlikitudNimi] = useState("");

  const kuvaNimi = (tegelane) =>{
    uuendaKlikitudNimi(tegelane.eesnimi);
  }
  // Miks ei kuva console.log -> undefined pragu
  return (
  <> 
  <div>
    { klikitudNimi !== "" && <div> Klikisid tegelase {klikitudNimi} peale</div>}
    {tegelased.map(tegelane =>
    <div key={tegelane.nimi}>
      <div>{tegelane.eesnimi}<button onClick={() => kuvaNimi(tegelane)}>Console log</button></div>
      <div>{tegelane.perenimi}</div>
      <div>{tegelane.elukoht}</div>
    </div>)}
  </div>
  </>

  )
}

export default Avaleht