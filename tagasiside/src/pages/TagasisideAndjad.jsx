import { useState, useRef } from 'react';
import nimedFailist from "../../data/nimed.json";

function TagasisideAndjad() {
    const [nimed, setNimed] = useState(nimedFailist);
    const nimiRef = useRef();


    const kustutaNimi = (index) => {
        nimed.splice(index, 1);
        setNimed(nimed.slice());
    }


    const lisaNimi = () => {
          if (nimiRef.current.value.trim() !== "") {
             nimed.push(nimiRef.current.value);
                 setNimed(nimed.slice());
            nimiRef.current.value = "";
        }
    }


    //filtreerimine
    const filterMAlgavad = () => {
             setNimed(nimedFailist.filter(nimi => nimi.startsWith('M')));
    }

    const filterKuueKohalised = () => {
        setNimed(nimedFailist.filter(nimi => nimi.length === 6));
    }

    const filterYLoppevad = () => {
         setNimed(nimedFailist.filter(nimi => nimi.endsWith('y')));
    }

    const sorteeriZA = () => {
        setNimed([...nimed].sort().reverse());
    }

      const lisaEstEes = () => {
    setNimed(nimed.map(nimi => `EST-${nimi}`));
    }





    return (
        <div>
            <br />
            <br />
            
                        <div >
                 <button onClick={filterMAlgavad}>Filtreeri M tähega algavad</button>
             <button onClick={filterKuueKohalised}>Filtreeri 6-kohalised</button>
                <button onClick={filterYLoppevad}>Filtreeri Y tähega lõppevad</button>
                <button onClick={sorteeriZA}>Sorteeri Z-A</button>
                <button onClick={lisaEstEes}>Lisa EST- ette</button>
            </div>


            <h1>Tagasiside Andjad</h1>
            <p>Kokku: {nimed.length} tk</p>
            <div>
                {nimed.map((nimi, index) => (
                    <div key={index}>
                        {nimi} 
                        <button onClick={() => kustutaNimi(index)}>x</button>
                    </div> ))}
            </div>
            <div >
                <label >Lisa uus nimi:</label>
                <input ref={nimiRef} type="text" placeholder="Sisesta nimi siia!!" />
                <button onClick={lisaNimi}>Lisa</button>
            </div>



        </div>


    );
}

export default TagasisideAndjad;
