import { useEffect, useState } from "react";

function Cars() {

  const [cars, setCars] = useState([]);

  useEffect(() => {

    fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100')  
       .then((response) => response.json())
      .then((data) => setCars(data.results))    
  }, []);


  return (
    <div>
      <h1>Car List</h1>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Fuel Economy (City)</th>
            <th>Fuel Economy (Highway)</th>
            <th>CO2 Emissions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.city08} MPG</td>
              <td>{car.highway08} MPG</td>
              <td>{car.co2} g CO2</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cars