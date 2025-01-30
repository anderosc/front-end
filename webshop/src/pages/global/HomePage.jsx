import { useState } from "react"
import { Link } from "react-router-dom";
import productsFromFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';
import CarouselGallery from "../../components/CarouselGallery";
import styles from "../../css/Homepage.module.css"


function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (product) =>{
      const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
      cartLocalStorage.push(product);
      localStorage.setItem("cart", JSON.stringify(cartLocalStorage));
      toast("Product added to cart!");
  }
  const sortAZ = () => {
    const sorted = products.toSorted((a, b) => a.title.localeCompare(b.title));
      setProducts(sorted);
  }
  const sortZA = () => {
    const sorted = products.toSorted((a, b) => b.title.localeCompare(a.title));
    setProducts(sorted);
  }
  const sortPriceHighToLow = () => {
    const sorted = products.toSorted((a,b) => b.price-a.price);
    setProducts(sorted);
  }
  const sortPriceLowToHigh = () => {
    const sorted = products.toSorted((a,b) => a.price-b.price);
    setProducts(sorted);
  }
  const sortRatingHTL = () => {
    const sorted = products.toSorted((a,b) => b.rating.rate - a.rating.rate);
    setProducts(sorted);
  }
  const sortRatingLTH = () => {
    const sorted = products.toSorted((a,b) => a.rating.rate - b.rating.rate);
    setProducts(sorted);
  }
  const filterElectronics = () =>{
    const filter = products.filter(product => product.category.includes("electronics"));
    setProducts(filter);
  }
  const filterJewelery = () =>{
    const filter = products.filter(product => product.category.includes("jewelery"));
    setProducts(filter);
  }
  const filterMensClothing = () =>{
    const filter = products.filter(product => product.category.includes("men's clothing"));
    setProducts(filter);
  }
  const filterWomensClothing = () =>{
    const filter = products.filter(product => product.category.includes("women's clothing"));
    setProducts(filter);
  }


  return (
    <div>
      <CarouselGallery />
      <button onClick={sortAZ}>Sort A - Z</button>
      <button onClick={sortZA}>Sort Z - A</button>
      <button onClick={sortPriceHighToLow}>Sort Price ⬇</button>
      <button onClick={sortPriceLowToHigh}>Sort Prize ⬆</button>
      <button onClick={sortRatingHTL}>Sort Rating ⬇</button>
      <button onClick={sortRatingLTH}>Sort Rating ⬆</button>
      <br />
      <div>Filter:</div>
      <button onClick={filterElectronics}> Electronics </button>
      <button onClick={filterWomensClothing}>womens clothing</button>
      <button onClick={filterMensClothing}> mens clothing</button>
      <button onClick={filterJewelery}>jewelery</button>


      <br />
      {products.map((product) => 
        <div key={product.id}>
          <img className={product.active ? styles.image : styles.inactive_image} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <Link to={"/product/" + product.id} > <button>Vt lähemalt</button> </Link> 
          <div><button disabled={!product.active} onClick={() => addToCart(product)}>Lisa ostukorvi</button></div>
        </div>
      )}

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

export default HomePage