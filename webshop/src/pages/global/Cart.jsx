import { useState } from "react"

function Cart() {
  const [products, setProduct] = useState(JSON.parse(localStorage.getItem("cart")));

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


      {products.map((cartProduct) => 
        <div key={cartProduct.id}>
          <img style={{width: "100px"}} src={cartProduct.image} alt="" />
          <div>{cartProduct.title}</div>
          <div>{cartProduct.price}</div>
          <div><button onClick={() => removeProduct(cartProduct)}>Remove</button></div>
        </div>
      )}
    </div>
  )
}

export default Cart