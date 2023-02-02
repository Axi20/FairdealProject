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
     </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
