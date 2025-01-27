import { useEffect, useState } from "react";

function Countries2() {
  const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      fetch('https://www.freetestapi.com/api/v1/countries')  
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div>
      <h1>Countries List</h1>
          <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Population</th>
            <th>Land Area (km²)</th>
            <th>Density (per km²)</th>
            <th>Capital</th>
            <th>Currency</th>
          </tr>
        </thead>


     <tbody>
          {countries.map(country => (
            <tr key={country.id}>
              <td>{country.name}</td>
              <td>{country.population}</td>
              <td>{country.land_area}</td>
              <td>{country.density}</td>
              <td>{country.capital}</td>
              <td>{country.currency}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
  

export default Countries2