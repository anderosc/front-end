import React from 'react'
import { useParams } from 'react-router-dom';
import shipmentsJSON from "./shipments.json"

function OneShipment() {
    const {orderNo} =useParams();
    const foundShipment = shipmentsJSON.find(shipment => shipment.orderNo === orderNo);


  if(foundShipment === undefined){
    return <div> Shipment not found </div>
  }


  return (
    <div>
        <div>{foundShipment.orderNo}</div>
        <div>Hind: {foundShipment.date}</div>
    </div>
  )
}

export default OneShipment