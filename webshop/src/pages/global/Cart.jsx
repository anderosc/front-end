import { useEffect, useState } from "react"

function Cart() {
  const [products, setProduct] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json));
  }, []);

  const removeProduct = (product) => {
    products.splice(product, 1);
    setProduct(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));  
  }

  const deleteAll = () =>{
    setProduct([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }



  return (
    <div>

      {products.length === 0 && <div>Cart is empty </div>}      

      {products.length > 0 ? <div>Items: {products.length} </div>  : undefined}

      <br />

      {products.length > 0 ?
      <button onClick={() => deleteAll()}>Clear Cart</button>
        : undefined}


      {products.map((cartProduct, index) => 
        <div key={index}>
          <img style={{width: "100px"}} src={cartProduct.image} alt="" />
          <div>{cartProduct.title}</div>
          <div>{cartProduct.price}</div>
          <div><button onClick={() => removeProduct(index)}>Remove</button></div>
        </div>
      )}

      <select > 
        {parcelMachines
        .filter(pm => pm.A0_NAME === "EE")
        .map(pm => <option key={pm.NAME}> {pm.NAME} </option>)}
      </select>
    </div>
  )
}

export default Cart