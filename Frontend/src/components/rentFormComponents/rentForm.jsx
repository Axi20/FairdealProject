import React from 'react';
import { useState } from "react";
import './rentFormPage.css';
import { Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const RentFormPage = () => {
    
  return (
    <section>
        <div className='rent-form'>
            <h1 className='rentform-title'>Bérlés véglegesítése</h1>
            <hr></hr>
            {/* <Form> */}
                <Row>
                    <Col>
                    <Form.Group controlId="formCarName">
                        <Form.Label>Márka</Form.Label>
                        <Form.Control type="text" disabled />
                    </Form.Group>
                    <Form.Group controlId="formCarModel">
                        <Form.Label>Modell</Form.Label>
                        <Form.Control type="text"  disabled />
                    </Form.Group>
                    <Form.Group controlId="formCarModel">
                        <Form.Label>Évjárat</Form.Label>
                        <Form.Control type="text"  disabled />
                    </Form.Group>
                    <Form.Group controlId="formCarModel">
                        <Form.Label>Napi ár</Form.Label>
                        <Form.Control type="text"  disabled />
                    </Form.Group>
                    <Form.Group controlId="formCarModel">
                        <Form.Label>Végösszeg</Form.Label>
                        <Form.Control type="text"  disabled />
                    </Form.Group>
                    {/* other car information fields */}
                    </Col>
                    <Col>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Teljes név</Form.Label>
                        <Form.Control type="text" disabled />
                    </Form.Group>
                    <Form.Group controlId="formUserPhoneNumber">
                        <Form.Label>Telefonszám</Form.Label>
                        <Form.Control type="text" disabled />
                    </Form.Group>
                    <Form.Group controlId="formUserEmail">
                        <Form.Label>Email cím</Form.Label>
                        <Form.Control type="text" disabled />
                    </Form.Group>
                    <Form.Group controlId="formUserLicenceNumber">
                        <Form.Label>Jogosítvány szám</Form.Label>
                        <Form.Control type="text" disabled />
                    </Form.Group>
                    <Form.Group controlId="formUserLicenceNumber">
                        <Form.Label>Bérelt napok száma</Form.Label>
                        <Form.Control type="number" required min={1} max={30} />
                    </Form.Group>
                    {/* other user information fields */}
                    </Col>
                </Row>
                {/* submit button and other form fields */}
                <button className='rent-final-button'>Bérlés</button>
            {/* </Form> */}
        </div>
    </section>
  )
}

export default RentFormPage;