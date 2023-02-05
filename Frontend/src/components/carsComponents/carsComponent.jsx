import React from "react";
import CarsPage from "../../pages/carsPage";
import CarCards from "./carCards";
import Cars from "./cars";
import './carsPage.css';

function CarsComponent() {
    return (
      <section>
        <Cars/>
        <CarCards/>
      </section>
    );
}

export default CarsComponent;