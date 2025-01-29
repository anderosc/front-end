import productsFile from "../../data/products.json"
import { useState } from "react"

function MaintainProducts() {
  const [products, setProducts] = useState(productsFile);

  const deleteProduct = (index) =>{
      productsFile.splice(index, 1);
      setProducts(products.slice());
  };
  

  return (
    <div>
      <div>Total products: {products.length}</div>

      <table>
          <thead>
              <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Rating Rate</th>
                  <th>Raiting Count</th>
                  <th> </th>
              </tr>
          </thead>
          <tbody>
              {products.map((product, index) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img style={{ width: '40px', height: '30px' }}  src={product.image} alt="" /></td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
                <td><button onClick={() => deleteProduct(index)}>DELETE</button></td>
              </tr>
              ))}
          </tbody>
      </table>
    </div>
  )
}

export default MaintainProducts