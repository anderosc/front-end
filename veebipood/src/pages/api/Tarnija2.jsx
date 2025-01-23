import { useEffect, useState } from "react";

function Tarnija2() {

  const [tooted, setTooted] = useState([]);

  // uef --> lühend, lehele tulekul pannkse kohselt funktsoon käima
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(res => res.json()) // --> kogu tagastus - metaandmetega
    .then(json => setTooted(json));
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
            <th>Category</th>
            <th>Image</th>
            <th>Rating rate:</th>
            <th>Rating count:</th>
          </tr>
        </thead>
        <tbody>
        {tooted.map(toode => 
        <tr key={toode.id}>
          <td>{toode.id}</td>
          <td>{toode.title}</td>
          <td>{toode.price}</td>
          <td>{toode.descriptio}</td>
          <td>{toode.category.name}</td>
          {/* <td>{toode.image}</td> */}
          {/* <td>{toode.rating.rate}</td>
          <td>{toode.rating.count}</td> */}
        </tr>)}

     
        </tbody>
      </table>
    
    </div>
  )
}

export default Tarnija2