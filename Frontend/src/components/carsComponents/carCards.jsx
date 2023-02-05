import React from 'react';
// import jwtDecode from 'jwt-decode';
import './carsPage.css';
import Cols from 'react-bootstrap/Col';
import Rows from 'react-bootstrap/Row';

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
    window.location.assign('/rent');
    // Parse the token to get the user's ID or other information
    const payload = jwtDecode(token)
    console.log(`User ID: ${payload._id}`);
  }
}

const CarCards = (props) => {
  return (
        <div className='external-div-rent'>
            <div className='internal-div-rent'>
                <div className='card-rent'>
                    <div>
                        <Rows>
                            <Cols>
                            <img className='image-rent' src={props.img} alt='cars' />
                            </Cols>
                            <Cols>
                            <p className='car-id-rent'>{props.id}</p>
                            <h1 className='brand-rent'>{props.brand} {props.model}</h1>
                            <hr className='line-rent'></hr>
                            <p className='year-rent'>{props.year}</p>
                            <p className=''>{props.consumption} L/100 km  </p>
                            <p className=''>{props.price} Ft / nap </p>
                            <p className='description-rent'>{props.description}</p>
                            <button type='submit' onClick={() => window.location.assign(`/rent/${props.id}`)} className='rent-btn-rent'>Bérlés</button>
                            </Cols>
                        </Rows>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default CarCards;