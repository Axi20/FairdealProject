import React from "react";
import HomePage from "../../pages/homepage";
import Footer from "../Footer";
import Effect from "./Effect";
import GotoPage from "./GotoPage";
import SpecialOffers from "./SpecialOffers";

function HomeComponent() {
    return (
       <section>
            <Effect/>
            <GotoPage/>
            <SpecialOffers/>
            <Footer/>
       </section>
    );
}

export default HomeComponent;