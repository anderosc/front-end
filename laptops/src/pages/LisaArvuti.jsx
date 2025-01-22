
import { useState } from "react";

function LisaArvuti() {
  const [sonum, setSonum] = useState("Lisa arvuti!");
  const [naitaNupp, setNupp] = useState(true);

  const lisa = () => {
    setSonum("Lisatud!");
    setNupp(false);
  };

  return (
    <div>
      <h1>Lisa uus arvuti</h1>
      <p>Sõnum: {sonum}</p>
      {naitaNupp && <button onClick={lisa}>{sonum}</button>}
    </div>
  );
}

export default LisaArvuti;

