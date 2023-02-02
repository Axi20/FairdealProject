import React from 'react';
import Effect from '../components/Effect'
import GotoPage from '../components/GotoPage'
import SpecialOffers from '../components/SpecialOffers'
import HomeComponent from '../components/homeComponents/homeComponent';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <section>
      <Effect />
      <GotoPage />
      <SpecialOffers />
      <Footer/>
    </section>
  )
}

export default HomePage;