import React from "react";
import CarsPage from "../../pages/carsPage";
import Search from "../searchboxComponents/searchBox";
import CarCards from "./carCards";
import Cars from "./cars";
import './carsPage.css';

function CarsComponent() {
    return (
      <section>
        <Search/>
        <Cars/>
        <CarCards/>
      </section>
    );
}

export default CarsComponent;