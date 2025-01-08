import { useState } from 'react'
import TootajadData from '../../data/tootajad.json';

function HaldaTootajad() {
    const [tootajad, setTootajad] = useState(TootajadData);
    console.log(tootajad)
    
    const kustutaTootaja = (index) => {
        TootajadData.splice(index, 1);
        setTootajad(TootajadData.slice());
    }

  return (
    <div>
        <div>Hindade arv kokku: {tootajad.length} </div>

        <table> 
            <thead>
                <tr> 
                    <th> Index</th>
                    <th> Hind</th>
                    <th> Kustuta</th>
                </tr>
            </thead>
            <tbody>
                
            
                {tootajad.map((tootaja, index) => 
                <tr key={tootaja}> 
                <td>{index}</td>
                <td>{tootaja} </td>
                <td><button onClick={kustutaTootaja(index)}>x</button> </td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaTootajad