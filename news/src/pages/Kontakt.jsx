import { useState } from "react";

function Kontakt() {
  const [n2itaTelKristiine, muudanN2itaTelKristiine] = useState(false);
  const [n2itaTelYlemiste, muudanN2itaTelYlemiste] = useState(false);
  const [n2itaTelTasku, muudanN2itaTelTasku] = useState(false);

  return (
    <div>
      <div>Võta ühendust!</div>
      <br />
      <div onClick={() => muudanN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine Keskus</div>
      {n2itaTelKristiine && <div>+372 54 54 10 10</div>}
      <div>Endla 45</div>

      <br />

      <div onClick={() => muudanN2itaTelYlemiste(!n2itaTelYlemiste)}>Ülemiste Keskus</div>
      {n2itaTelYlemiste && <div>+372 54 54 10 10</div>}
      <div>Suur-Sõjamäe 4</div>

      <br />

      <div onClick={() => muudanN2itaTelTasku(!n2itaTelTasku)}>Tasku Keskus</div>
      {n2itaTelTasku && <div>+372 54 54 10 10</div>}
      <div>Turu 2</div>

      <br />
    </div>
  );
}

export default Kontakt;
