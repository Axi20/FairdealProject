import React from 'react';
// import Suzuki from '../assets/suzuki1.png';
// import Ford from '../assets/fordranger.png';
// import Hyundai from '../assets/hyundaitucson.png';
// import jwt from 'jwt-decode';
// import jwtDecode from 'jwt-decode';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style/specialOffers.css'
import { useState, useEffect } from 'react';

function checkLogin(){
    // Get the token from local storage
  const token = localStorage.getItem("jwt");

  if (!token) {
    // No token is present, the user is not logged in
    console.log('Not logged in');
    window.location.href = '/login';
  } else {
    // Token is present, the user is logged in
    console.log('Logged in');
    window.location.assign(`/rent/`)

    // Parse the token to get the user's ID or other information
    const payload = jwtDecode(token)
    console.log(`User ID: ${payload._id}`);
  }
}

function SpecialOffers() {
  const token = localStorage.getItem("jwt");
  const [car1, setCar1] = useState({});
  const [car2, setCar2] = useState({});
  const [car3, setCar3] = useState({});

  //Connect with the backend
  useEffect(() => {
    // send a GET request to the /cars/1 endpoint
    fetch('http://127.0.0.1:8080/cars/1')
      .then(response => response.json())
      .then(data => setCar1(data))
      .catch(error => console.error(error.message));

    // send a GET request to the /cars/2 endpoint
    fetch('http://127.0.0.1:8080/cars/2')
      .then(response => response.json())
      .then(data => setCar2(data))
      .catch(error => console.error(error.message));

    // send a GET request to the /cars/3 endpoint
    fetch('http://127.0.0.1:8080/cars/3')
      .then(response => response.json())
      .then(data => setCar3(data))
      .catch(error => console.error(error.message));
  }, []);

  return (
    
    <div className='first-div'>
        <div className='div-title'>Kiemelt ajánlataink</div>
          <hr className='hr'></hr>
        <div className='cars-div'>
          <Row>
            <Col>
            <div className='internal-div'>
                  <p className='hidden'>{car1.id}</p>
                  <img className='image'  src={car1.img} alt="/" />
                  <h2 className='car-brand'>{car1.brand}</h2>
                  <p className='car-price'>{car1.price} Ft/nap</p>
                  <div className='data-div'>
                      <p className='car-data'>{car1.engine_size} cm<sup>3</sup></p>
                      <p className='car-data'>{car1.consumption} l/100km </p>
                      <p className='car-data'>{car1.fuel}</p>
                      <button onClick={checkLogin} type="submit" className='rent-button '>Bérlés</button>
                  </div>
              </div>
            </Col>
            <Col>
              <div className='internal-div'>
                  <p className='hidden'>{car2.id}</p>
                  <img className='image' src={car2.img} alt="/" />
                  <h2 className='car-brand'>{car2.brand}</h2>
                  <p className='car-price'>{car2.price} Ft/nap</p>
                  <div className='data-div'>
                      <p className='car-data'>{car2.engine_size} cm<sup>3</sup></p>
                      <p className='car-data'>{car2.consumption} l/100km </p>
                      <p className='car-data'>{car2.fuel}</p>
                      <button onClick={checkLogin} type="submit" className='rent-button '>Bérlés</button>
                  </div>
              </div>
            </Col>
            <Col>
              <div className='internal-div'>
                  <p className='hidden'>{car3.id}</p>
                  <img className='image' src={car3.img} alt="/" />
                  <h2 className='car-brand'>{car3.brand}</h2>
                  <p className='car-price'>{car3.price} Ft/nap</p>
                  <div className='data-div'>
                      <p className='car-data'>{car3.engine_size} cm<sup>3</sup></p>
                      <p className='car-data'>{car3.consumption} l/100km</p>
                      <p className='car-data'>{car3.fuel}</p>
                      <div className='pt-1'>
                      <button onClick={checkLogin} type="submit"  className=' rent-button'>Bérlés</button>
                    </div>
                  </div>
              </div>
            </Col>
          </Row>
        </div>       
        <div className='cars-page'>
          <h2 className="title">Nézze meg a kínálatunkat!</h2>
          <hr className='custome-hr'></hr>
          <div>
            <a href="/cars"><button className='cars-btn'>Bérelhető autóink</button></a>
          </div>
        </div>
    </div>
  )
}

export default SpecialOffers