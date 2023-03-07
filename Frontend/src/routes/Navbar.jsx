import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { Navbar, Nav, Container } from 'react-bootstrap';

import './style.css'
import { addUserData } from '../redux/countreSlice';


const Navigation = () => {
    const isLoggedIn = useSelector(state => state.counter.userData.IsLoggedIn);
    const dispatch = useDispatch();
    console.log(isLoggedIn);

//    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
//    useEffect(() => {
//      const lin = localStorage.getItem("isLoggedIn");
 //       setIsLoggedIn(lin);
  //      console.log(lin);
 //   }, []);

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    const logout = () => {
        dispatch(addUserData());
        if (confirm("Biztosan kijelentkezik?")) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem("jwt");
          } else {
            // window.close();
          }
        // localStorage.removeItem('isLoggedIn');
        // localStorage.removeItem("jwt");
        //navigate('/');
    };


    return (
        <div>
            {/* <div>
                <img src="https://cdn.discordapp.com/attachments/1042149414568984668/1070443937539555479/chris-lawton-XR8kg_TYGh4-unsplash.jpg" style={{width: "100%", height:"20%"}} />
            </div> */}
            <Navbar  collapseOnSelect fixed='top' expand='sm'>
                {/* <Container> */}
                {/* <img src="https://cdn.discordapp.com/attachments/1042149414568984668/1070441372403900476/logo-removebg-preview.png" alt="Logo" style={{width: "15%"}} /> */}
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsible-navbar-nav' >
                        <Nav>
                            <Nav.Link eventKey="2" className='link' href='/'>FŐOLDAL</Nav.Link>
                            <Nav.Link  eventKey="2" className='link' href='/contact'>KAPCSOLAT</Nav.Link>
                            <Nav.Link eventKey="2" className='link' href='/about'>RÓLUNK</Nav.Link>
                            <Nav.Link eventKey="2" className='link' href='/cars'>AUTÓINK</Nav.Link>
                            {/* <Nav.Link eventKey="2" className='link' href='/terms'>ÁSZF</Nav.Link> */}
                            {/* {console.log("ár" + isLoggedIn)} */}
                            {isLoggedIn ? (
                                <Nav.Link eventKey="2" onClick={() => logout()}>KIJELENTKEZÉS</Nav.Link>
                            ) : (
                                <Nav.Link eventKey="2" className="auth" href='/registration'>REGISZTRÁCIÓ</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    )
}

export default Navigation