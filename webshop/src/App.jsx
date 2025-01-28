
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'
import HomePage from './pages/global/HomePage'
import ContactUs from './pages/global/ContactUs'
import Shops from './pages/global/Shops'
import Cart from './pages/global/Cart'
import SingleProduct from './pages/global/SingleProduct'
import AdminHome from './pages/admin/AdminHome'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import MaintainProducts from './pages/admin/MaintainProducts'
import MaintainCategories from './pages/admin/MaintainCategories'
import MaintainShops from './pages/admin/MaintainShops'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import NotFound from './pages/global/NotFound'

function App() {

  return (
    <>
     <div className='App'>
      <NavigationBar /> 

      <Routes>
        <Route to="" element={ <HomePage/>} />
        <Route to="/contact" element={ <ContactUs/>} />
        <Route to="/shops" element={ <Shops/>} />
        <Route to="/cart" element={ <Cart/>} />
        <Route to="/product/:index" element={ <SingleProduct/>} />

        <Route to="/admin" element={ <AdminHome/>} />
        <Route to="/admin/add-product" element={ <AddProduct/>} />
        <Route to="/admin/edit-product/:index" element={ <EditProduct/>} />
        <Route to="/admin/maintain-product/" element={ <MaintainProducts/>} />
        <Route to="/admin/maintain-categories" element={ <MaintainCategories/>} />
        <Route to="/admin/maintain-shops" element={ <MaintainShops/>} />

        <Route to="/login" element={ <Login/>} />
        <Route to="/signup" element={ <Signup/>} />

        <Route to="/*" element={ <NotFound/>} />


      </Routes>
     </div>
    </>
  )
}

export default App
