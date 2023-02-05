import React from "react";
import './contactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () =>{

    return(
        <div className = "container">
            <div className="log-div">
                <div>
                    <h1 className="log">Kérdése van? <br></br> Lépjen velünk kapcsolatba!</h1>
                    <hr></hr>
                   
                    <div>
                        <Row>
                            <Col className="mobile"><FontAwesomeIcon icon={faMobileAlt} size="2x" /></Col>
                            <Col className="mobile"><h6>+ 36 70 123 456</h6></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col className="email"><FontAwesomeIcon icon={faEnvelope} size="2x" /></Col>
                            <Col className="email"><h6>info@fairdeal.com</h6></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col  className="address"><FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /></Col>
                            <Col  className="address"><h6>6724 Szeged, Budapesti út 1.</h6></Col>
                        </Row>
                    </div>
                    <h1 className="log">Nyitvatartási idő</h1>
                    <div className="open">
                        <div><Row><Col><h5>Hétfő</h5></Col><Col><h5>08:00 - 16:00</h5></Col></Row></div>
                        <div><Row><Col><h5>Kedd</h5></Col><Col><h5>08:00 - 16:00</h5></Col></Row></div>
                        <div><Row><Col><h5>Szerda</h5></Col><Col><h5>09:00 - 14:00</h5></Col></Row></div>
                        <div><Row><Col><h5>Csütörtök</h5></Col><Col><h5>08:00 - 16:00</h5></Col></Row></div>
                        <div><Row><Col><h5>Péntek</h5></Col><Col><h5>09:00 - 14:00</h5></Col></Row></div>
                        <div><Row><Col><h5>Szombat</h5></Col><Col><h5>09:00 - 12:00</h5></Col></Row></div>
                        <div><Row><Col><h5>Vasárnap</h5></Col><Col><h5>ZÁRVA</h5></Col></Row></div>
                    </div>
                </div>
            </div>
            
        </div>    
    )
}

export default Contact;