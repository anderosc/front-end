import { useEffect, useState } from "react";

function Electricity() {

  const [hinnad, setHinnad] = useState([]);

  // uef --> lühend, lehele tulekul pannkse kohselt funktsoon käima
  useEffect(() => {
    fetch("https://dashboard.elering.ee/api/nps/price")
    .then(res => res.json()) // --> kogu tagastus - metaandmetega
    .then(json => setHinnad(json.data.ee));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Title:</th>
            <th>Price:</th>
            <th>description:</th>

          </tr>
        </thead>
        <tbody>
        {hinnad.map(toode => 
        <tr key={toode.id}>
          <td>{toode.id}</td>
          <td>{toode.title}</td>
          <td>{toode.price}</td>
          <td>{toode.descriptio}</td>

        </tr>)}

     
        </tbody>
      </table>
    
    </div>
  )
}

export default Electricity