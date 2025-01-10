import { useState } from 'react';
import tootedFailist from '../../data/tooted.json';

function HaldaTooted() {
    const [tooted, setTooted] = useState(tootedFailist);
    console.log(tooted);

    const kustutaToode = (index) => {
        tootedFailist.splice(index, 1);
        setTooted(tootedFailist.slice());
    };

    return (
        <div>
            <div>Toodete arv kokku: {tooted.length}</div>

            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Toode</th>
                        <th>Kustuta</th>
                    </tr>
                </thead>
                <tbody>
                    {tooted.map((toode, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{toode}</td>
                            <td>
                                <button onClick={() => kustutaToode(index)}>x</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HaldaTooted;