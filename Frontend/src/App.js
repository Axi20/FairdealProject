import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AboutComponent from './components/aboutComponents/aboutComponent';
import CarsComponent from './components/carsComponents/carsComponent';
import ContactComponent from './components/contactComponents/contactComponent';
import Footer from './components/Footer';
import HomeComponent from './components/homeComponents/homeComponent';
import LoginComponent from './components/loginComponents/loginComponent';
import TermsComponent from './components/termsComponents/termsComponent';
import MainRoutes from './routes/Mainroute';
import Navigation from './routes/Navbar';
import { Route, Routes } from 'react-router-dom'
import SignupComponent from './components/signupComponents/signupComponent';
import RentComponent from './components/rentComponents/rentComponent';
import ProfileComponent from './components/profileComponents/profileComponent';
import RentFormPage from './pages/rentFormPage';
import RentFormComponent from './components/rentFormComponents/rentFormComponent';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path='/contact' element={<ContactComponent/>}/>
        <Route path='/about' element={<AboutComponent/>}/>
        <Route path='/cars' element={<CarsComponent/>}/>
        <Route path='/terms' element={<TermsComponent/>}/>
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/registration' element={<SignupComponent/>}/>
        <Route path="/rent/:id" element={<RentComponent />} />
        <Route path="/user-profile" element={<ProfileComponent/>} />
        <Route path="/rent-car/:id" element={<RentFormComponent/>} />
     </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
