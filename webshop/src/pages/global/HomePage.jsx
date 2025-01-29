import { useState } from "react"
import productsFromFile from "../../data/products.json"

function HomePage() {
  const [webProducts, setProducts] = useState(productsFromFile);

  const addToCart = (product) =>{
      const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
      cartLocalStorage.push(product);
      localStorage.setItem("cart", JSON.stringify(cartLocalStorage));
  }

  return (
    <div>
      {webProducts.map(cartProduct => 
        <div key={cartProduct.id}>
          <img style={{width: "100px"}} src={cartProduct.image} alt="" />
          <div>{cartProduct.title}</div>
          <div>{cartProduct.price}</div>
          <div><button onClick={() => addToCart(cartProduct )}>Lisa ostukorvi</button></div>
        </div>
      )}
    </div>
  )
}

export default HomePage