import { useState } from 'react';

function Ilmumine() {
  const [naita, setNaita] = useState(false);

  return (
    <div>
      <h1>Ilmumise Näide</h1>
      <button onClick={() => setNaita(!naita)}>
        {naita ? 'Peida' : 'Näita'}
      </button>
      {naita && (
        <div>
          <p>See tekst ilmub ja kaob vastavalt nupule vajutamisele!</p>
        </div>
      )}
    </div>
  );
}

export default Ilmumine;
