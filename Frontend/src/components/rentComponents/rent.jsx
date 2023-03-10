import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { useMap } from 'react-leaflet/hooks'
import './rentPage.css';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import RentFormPage from '../rentFormComponents/rentForm.jsx';
import { useSelector, useDispatch } from 'react-redux'
import { addData } from '../../redux/countreSlice';
// import '../../index.css';

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
    //   window.location.assign('/rent');
      // Parse the token to get the user's ID or other information
      const payload = jwtDecode(token)
      console.log(`User ID: ${payload._id}`);
      const userID = localStorage.setItem("ID", payload._id);
      
    }
  }

const RentPage = (props) => {

    const count = useSelector((state) => state.counter.carData)
    const dispatch = useDispatch()
        const { id } = useParams();
        const [car, setCar] = useState({});
        const navigate = useNavigate();

        const handleClick = () => {
            // Get the token from local storage
            const token = localStorage.getItem("jwt");
            if (!token) {
            // No token is present, the user is not logged in
            console.log('Not logged in');
            window.location.href = '/login';
            } else {
            // Token is present, the user is logged in
            console.log('Logged in');
            navigate(`/rent-car/${id}`);
            //   window.location.assign('/rent');
            // Parse the token to get the user's ID or other information
            const payload = jwtDecode(token)
            console.log(`User ID: ${payload._id}`);
            }
          };

        const myIcon = divIcon({
            className: 'my-div-icon',
            html: '<i class="fas fa-map-marker-alt"></i>',
            src:"https://cdn-icons-png.flaticon.com/512/1252/1252556.png?w=900&t=st=1673985093~exp=1673985693~hmac=91511f9181a949df7ddf15651dfcab65c43d2cf1bc602e439468b7b154c200ee"
            });
      
        useEffect(() => {
          async function fetchData() {
            const response = await fetch(`http://127.0.0.1:8080/cars/${id}`);
            const data = await response.json();
            setCar(data);
            dispatch(addData(data), id);
          }
          fetchData();
        }, [id]);

    return(        
        <div>
            <div className="car-data-div">
                <div className="">
                    <div className='car-data-div-bcg  '>
                        <div className='car-data-div-holder'>
                            <div className='car-data-internal-div'>
                                <div className='car-data-div'>
                                    <div className='car-data-list-div'>
                                        <h1 className='car-data-list-title'>Aut?? adatai</h1>       
                                        <hr className='car-data-div-line'></hr>  
                                        <h1 className='car-data-h1'>{car.brand} {car.model} {car.year}</h1> 
                                        <h1 className='car-type'>{car.type}</h1>
                                        <p><li>{car.fuel}</li></p>
                                        <p className=''><li>{car.consumption} l/km</li></p>    
                                        <p><li>{car.shift_type} v??lt??</li></p> 
                                        <p><li>{car.engine_size} cm<sup>3</sup> {car.horsepower} LE</li></p>
                                        <p className='car-description-p'>{car.description}</p>
                                        <p className='car-data-price'>Napi ??r: {car.price} FT</p>
                                        <button type="submit"  onClick={handleClick}  className='car-data-rent-button'>B??rl??s</button>
                                    </div>
                                </div>
                                <div className=''>
                                        <img className='car-data-div-img' src={car.img}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="full-width-div">
                <div className='terms-data-div'>
                    <div className=' terms-data-internal-div'>
                        <h1 className='rent-terms-title'>B??rl??si felt??telek</h1>  
                            <div className='full-width-div'>
                                <div className='terms-description-div'>
                                    <p><li>A szolg??ltat??s ig??nybev??tel??vel ??n elfogadja az ??ltal??nos szerz??d??si felt??teleket tov??bbiakban <a href="/terms" className='text-blue-800 underline'>??SZF</a>.</li></p>
                                    <p><li>Szolg??ltat??saink ig??nybev??tel??re 18. ??let??v??ket bet??lt??tt, adott g??pj??rm??t??pusra sz??l??, ??rv??nyes jogos??tv??nnyal rendelkez?? szem??lyek jogosultak.</li></p>
                                    <p><li>Hossz??t??v?? b??rl??s eset??n a fizet??s t??rt??nhet egy??sszegben, vagy r??szletenk??nt, azonban 50% el??leg befizet??se mindenk??pp sz??ks??ges!</li></p>
                                    <p><li>A szolg??ltat??st ig??nybevev?? szem??ly (a sof??r kil??t??t??l f??ggetlen??l) v??llalja, hogy a b??relt g??pj??rm??ben ??nhib??j??b??l okozott k??rokat megt??r??ti.</li></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="full-width-div">
                <div className='terms-div'>
                    <div>
                        <div className='rentplace-internal-div'>
                            <div className='full-width-div'>
                                <h1 className='rent-place-title'>K??lcs??nz?? helye</h1> 
                                <hr></hr>      
                               <div className='osm-div' id='osm'>
                                <MapContainer className="map-container" center={[46.2546312, 20.1486016]} zoom={13} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[46.2760757, 20.0985408]} icon={myIcon}>
                                        <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                        </Popup>
                                    </Marker>
                                    </MapContainer>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-div">
                <div className="">
                    <div className=' place-external-div'>
                            <div className='place-data-external-div'>
                                <div className='flex-div'>
                                    <div className='place-data-internal-div'>
                                        <h1 className='place-title-h1'>Szeged</h1>       
                                        <hr className='car-data-div-line'></hr>  
                                        <h1 className='rent-place-data-h1'>C??m: Szeged Budapesti ??t 5.</h1>
                                        <h1 className='rent-place-data-h1'>Telefonsz??m: + 36 70 123 4567</h1> 
                                        <h1 className='rent-place-data-h1'>Email-c??m: fairdeal.support@gmail.com</h1> 
                                        <p className='rent-place-description'>B??rmilyen k??rd??ssel, k??r??ssel nyugodtan forduljon hozz??nk bizalommal, szem??lyesen az irod??nkban, vagy a megadott el??rhet??s??geink egyik??n.</p>
                                        <p className="rent-place-description">Nyitvatart??si id??: <br></br> H??tf?? - P??ntek: 08:00-16:00 <br></br>Szombat: 08:00-14:00 <br></br>Vas??rnap: 08:00-12:00</p>
                                    </div>
                                </div>
                                <div className='pb-10'>
                                    <img className='rent-place-img' src="https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=1380&t=st=1674032152~exp=1674032752~hmac=0352fa7d33e1d48a71d5325ea9496777948eb9e6920d6677e5e4273c6f957516"></img>
                               
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default RentPage;
