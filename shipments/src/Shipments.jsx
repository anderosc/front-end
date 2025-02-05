import { useEffect, useState } from 'react';
import './App.css'
import shipmentsJSON from "./shipments.json"
import { Link } from 'react-router-dom';

function Shipments() {
  const [shipments, setShipments] = useState(shipmentsJSON);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // useEffect(() => {
  //   fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
  //     .then((response) => response.json())
  //     .then((data) => setShipments(data))
  // }, []);

  const openDetails = (shipment) => {
    setSelectedShipment(shipment);
    setIsDrawerOpen(true);
  };

  return (
    <div>
    <table border="1">
      <thead>
        <tr>
          <th>Order No</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Tracking No</th>
          <th>Status</th>
          <th>Consignee</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((shipment) => (
          <tr key={shipment.orderNo}>
            <td>{shipment.orderNo}</td>
            <td>{shipment.date}</td>
            <td>{shipment.customer}</td>
            <td>{shipment.trackingNo}</td>
            <td>{shipment.status}</td>
            <td>{shipment.consignee}</td>
            <td>
            <Link to={"/shipment/" + shipment.orderNo}> <button>View Details</button> </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {isDrawerOpen && selectedShipment && (
      <div className="details-panel">
        <h2>Shipment Details</h2>
        <p><strong>Order No:</strong> {selectedShipment.orderNo}</p>
        <p><strong>Date:</strong> {selectedShipment.date}</p>
        <p><strong>Customer:</strong> {selectedShipment.customer}</p>
        <p><strong>Tracking No:</strong> {selectedShipment.trackingNo}</p>
        <p><strong>Status:</strong> {selectedShipment.status}</p>
        <p><strong>Consignee:</strong> {selectedShipment.consignee}</p>
        <button onClick={() => setIsDrawerOpen(false)}>Close</button>
      </div>
    )}
  </div>
);
}
export default Shipments