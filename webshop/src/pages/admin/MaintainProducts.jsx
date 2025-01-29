import { toast, ToastContainer } from "react-toastify";
import productsFile from "../../data/products.json"
import { useRef, useState } from "react"

function MaintainProducts() {
  const [products, setProducts] = useState(productsFile);
  const searchInput = useRef();


  const deleteProduct = (index) =>{
      productsFile.splice(index, 1);
      setProducts(productsFile.slice());
      toast("Product deleted");
  };

  const search = () =>{
    if(searchInput.current.value.length < 3){
      return;
    }
    const search = products.filter(product => product.title.includes(searchInput.current.value));
    setProducts(search);
  }

  //kas peaks useEffecti kasutama? Kui tekib kolmas täht, siis on filtreeritud ja kustutades ei muutu.
  

  return (
    <div>
      <div>SEARCH:</div>
      <input type="text" onChange={search} ref={searchInput}  />
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

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        // transition={Bounce}
      />
    </div>
  )
}

export default MaintainProducts