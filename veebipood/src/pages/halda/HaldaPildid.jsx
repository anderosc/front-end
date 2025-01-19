import { useState } from 'react';
import PildidJSON from '../../data/pildid.json'
import { Link } from 'react-router-dom';


function HaldaPildid() {
  const [pildid, setPildid] = useState(PildidJSON);

  const kustutaEsimene = () => {
    PildidJSON.splice(0, 1); 
    setPildid(PildidJSON.slice())
}
const kustutaTeine  = () => {
  PildidJSON.splice(1, 1); 
    setPildid(PildidJSON.slice())
}
const kustutaKolmas = () => {
  PildidJSON.splice(2, 1); 
    setPildid(PildidJSON.slice())
}

const kustuta = (index) => {
  PildidJSON.splice(index, 1);
  setPildid(PildidJSON.slice());
}

  return (
    <div>
      
      <button disabled={pildid.length <1} onClick={kustutaEsimene}>Kustuta esimene pilt</button>
      <button disabled={pildid.length <2} onClick={kustutaTeine}>Kustuta teine pilt</button>
      <button disabled={pildid.length <3} onClick={kustutaKolmas}>Kustuta kolmas pilt</button>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <td> Index </td>
            <td> Pilt </td>
            <td> Kustuta </td>
            <td> Muuda </td>
          </tr>
        </thead>
        <tbody>
        {pildid.map((pilt, index) => 
         
          <tr key={pilt}> 
            <td>{index}</td>
            <td><img style={{ width: '40px', height: '30px' }}  src={pilt.url} alt="" /> </td>
            <td> <button onClick={() =>kustuta(index)}>x</button></td>
            <td> <Link to={"/muuda-pilt/" + index}> <button>Muuda</button></Link> </td>
          
        </tr>)}
        </tbody>
      </table>


    </div>
  )
}

export default HaldaPildid