import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/aboutPage';
import CarsPage from '../pages/carsPage';
import HomePage from '../pages/homepage';
import ContactPage from '../pages/contactPage';
import RentPage from '../pages/rentPage';
import SignupPage from '../pages/signupPage';
import LoginPage from '../pages/loginPage';
import ProfilePage from '../pages/profilePage';
import TermsPage from '../pages/termsPage';


const Pageroutes = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cars" element={<CarsPage  />} />
        <Route path="/rent/:id" element={<RentPage />} />
        <Route path="/registration" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-profile" element={<ProfilePage/>} />
        <Route path="/terms" element={<TermsPage/>} />
      </Routes>
    </section>
  )
}

export default Pageroutes