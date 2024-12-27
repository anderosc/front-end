
import { useState } from "react";

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa arvuti!");
  const [showButton, setShowButton] = useState(true);

  const handleAdd = () => {
    setMessage("Lisatud!");
    setShowButton(false);
  };

  return (
    <div>
      <h1>Lisa uus arvuti</h1>
      <p>Sõnum: {message}</p>
      {showButton && <button onClick={handleAdd}>{message}</button>}
    </div>
  );
}

export default LisaArvuti;

