import React from 'react';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import './footer.css';
import './footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY + window.innerHeight >= document.body.offsetHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'footer--visible' : ''}`}>
        <div className="container">
         <Row>
            <div className="col-lg-5 col-xs-12 about-company">
              {/* <img className="f-logo" src="https://cdn.discordapp.com/attachments/1042149414568984668/1070441372403900476/logo-removebg-preview.png" /> */}
              <p className="pr-5 text-white-50 logo-title">FairDeal</p>
              <p className="pr-5 text-white-50">Travel is adventure, and we are the key! </p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Hivatkozások</h4>
                <ul className="m-0 p-0">
                  <ul><a href="#" className='f-link list'>Főoldal</a></ul>
                  <ul><a href="#" className='f-link'>Autóink</a></ul>
                  <ul><a href="#" className='f-link'>Adatvédelem</a></ul>
                  <ul><a href="#" className='f-link'>Sütik</a></ul>
                  <ul><a href="#" className='f-link'>ÁSZF</a></ul>
                </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Elérhetőségek</h4>
              <p>6724 Szeged, Budapesti út 1.</p>
              <p className="mb-0"><i className="fa fa-phone mr-3"></i>+36/70 123-4567</p>
              <p><i className="fa fa-envelope-o mr-3"></i>info@fairdeal.com</p>
            </div>
          </Row>
          <hr className='hr-f'></hr>
          <div>
            <div className="copyright">            
               <p className=""><small className="text-white-50">Copyright &copy; {new Date().getFullYear()} FairDeal </small></p>
            </div> 
          </div>
        </div>
      </footer>
  );
}

export default Footer;



  {/* <p>Copyright © 2023</p>
      <div>
        <Row>
          <Col className='first-col'>
            <h4 className='footer-link-title'>Linkek</h4>
            <div><a href="/">Főoldal</a></div>
            <div><a href="/cars">Autóink</a></div>
            <div><a href="/registration">Regisztráció</a></div>
          </Col>
          <Col>
            <h4 className='footer-link-title'>Adatvédelem</h4>
            <div><a href="/terms">ÁSZF</a></div>
            <div><a href="/">Adatvédelmi tájékoztató</a></div>
            <div><a href="/">Cookie</a></div>
          </Col>
          <Col>
            <h4 className='footer-link-title'>Kapcsolat</h4>
          </Col>
          <Col>
            <h4 className='footer-link-title'>Email</h4>
          </Col>
        </Row>
      </div> */}