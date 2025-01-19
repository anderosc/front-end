import { useState } from 'react'
import TootajadData from '../../data/tootajad.json';
import { Link } from 'react-router-dom';

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
                    <th> Töötaja</th>
                    <th> Telefon</th>
                    <th> Amet</th>
                    <th> Tööstaaž</th>
                    <th> E-post</th>
                    <th> Kustuta</th>
                    <th> Muuda</th>
                </tr>
            </thead>
            <tbody>
                
            
                {tootajad.map((tootaja, index) => 
                <tr key={tootaja.nimi}> 
                <td>{index}</td>
                <td>{tootaja.nimi} </td>
                <td>{tootaja.telefon} </td>
                <td>{tootaja.amet} </td>
                <td>{tootaja.toostaaz} </td>
                <td>{tootaja.email} </td>
                <td><button onClick={() => kustutaTootaja(index)}>x</button> </td>
                <td> <Link to={"/muuda-tootaja/" + index}>  <button>Muuda</button> </Link></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaTootajad