import React, { useState, useEffect } from 'react';
import CarCards from './carCards';

function Cars() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://127.0.0.1:8080/cars');
      const data = await response.json();
      setModels(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {models.map((model) => (
          <CarCards key={model.vin} id={model.car_id} img={model.img} brand={model.brand} model={model.model} year={model.year} consumption={model.consumption} price={model.price} description={model.description}  /> 
      ))}
    </div>
  );
}

export default Cars;