import { useState } from 'react'
import hinnadFailist from '../../data/hinnad.json';
import { Link } from 'react-router-dom';

function HaldaHinnad() {
    const [hinnad, setHinnad] = useState(hinnadFailist);
    console.log(hinnad)
    
    const kustutaHind = (index) => {
        hinnadFailist.splice(index, 1);
        setHinnad(hinnadFailist.slice());
    }

  return (
    <div>
        <div>Hindade arv kokku: {hinnad.length} </div>

        <table> 
            <thead>
                <tr> 
                    <th> Index</th>
                    <th> Hind</th>
                    <th> Kustua</th>
                    <th> Muuda</th>
                </tr>
            </thead>
            <tbody>
                
            
                {hinnad.map((hind, index) => 
                <tr key={hind}> 
                <td>{index}</td>
                <td>{hind} </td>
                <td><button onClick={() => kustutaHind(index)}>x</button> </td>
                <td> <Link to={"/muuda-hind/" + index}> <button>Muuda</button> </Link></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad