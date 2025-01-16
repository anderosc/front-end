import { useState } from 'react';
import esindusedFailist from '../../data/esindused.json';
import { Link } from 'react-router-dom';

function HaldaEsindusi() {
    const [esindused, setEsindused] = useState(esindusedFailist);

    const kustutaEsindus = (index) => {
        esindusedFailist.splice(index, 1);
        setEsindused(esindusedFailist.slice());
    };

    return (
        <div>
            <div>Esinduste arv kokku: {esindused.length}</div>

            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Esindus</th>
                        <th>Kustuta</th>
                        <th>Muuda</th>
                    </tr>
                </thead>
                <tbody>
                    {esindused.map((esindus, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{esindus}</td>
                            <td>
                                <button onClick={() => kustutaEsindus(index)}>x</button>
                            </td>
                            <th> <Link to={"/muuda-esindus/" + index}> <button>Muuda</button> </Link></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HaldaEsindusi;