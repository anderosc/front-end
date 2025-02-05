import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Shipments from './Shipments';
import OneShipment from './OneShipment';

function App() {
 

  return (
    <div>
     <Link to={"/shipments"}> <button>SHIPMENTS </button>  </Link>    

     <Routes>
      <Route path="/shipments" element={< Shipments />} />
      <Route path="/shipment/:orderNo" element={< OneShipment />} />

      </Routes>

    </div>
  );
}
export default App
