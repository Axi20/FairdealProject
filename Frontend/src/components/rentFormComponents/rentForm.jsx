import React from 'react';
import { useState } from "react";
import './rentFormPage.css';
import { Form, Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux'



const RentFormPage = () => {
    const count = useSelector((state) => state.counter.carData)
    const [rentedDays, setRentedDays] = useState(1)
    const id = count.car_id;
    const customer_id = localStorage.getItem("ID");
    const handleRentedDaysChange = (event) => {setRentedDays(event.target.value);};
    const getTotalPrice = () => {return rentedDays * count.price;};
    const price = rentedDays * count.price;

    const rentCar = () => {
        const formData = {
            carData: count,
            userName: document.getElementById("formUserName").value,
            userPhoneNumber: document.getElementById("formUserPhoneNumber").value,
            userEmail: document.getElementById("formUserEmail").value,
            userLicenceNumber: document.getElementById("formUserLicenceNumber").value,
            rentedDays: document.getElementById("formRentDays").value,
        };

      const jsonData = JSON.stringify(formData);

      // Update the rented field in the database
        fetch(`http://127.0.0.1:8080/cars/${id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ rented: true }),
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

        // Add a new rental to the database
        fetch(`http://127.0.0.1:8080/rents`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({customer_id: parseInt(customer_id), car_id: parseInt(id), rent_days: parseInt(rentedDays), rent_price: parseInt(price)}),
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
        
      // Send the email using the server-side sendConfirmationEmail function
      const rentalStartDate = new Date().toISOString().slice(0, 10); // Get the current date as the rental start date
      const rentalDays = parseInt(formData.rentedDays);
      const rentalEndDate = new Date(Date.parse(rentalStartDate) + (rentalDays * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10); // Calculate the end rental date based on the rental start date and rental days
      const sendConfirmationEmail = (email, name, carName, carPlateNumber, carModel, carYear, rentalStart, rentalEnd, finalPrice, office, phoneNumber, contactEmail) => {

        fetch(`http://127.0.0.1:8080/send-confirmation-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                name,
                carName,
                carPlateNumber,
                carModel,
                carYear,
                rentalStart,
                rentalEnd,
                finalPrice,
                office,
                phoneNumber,
                contactEmail
            })
            
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    };
    // Call the sendConfirmationEmail function with the required parameters
    sendConfirmationEmail(formData.userEmail, formData.userName, count.brand, count.plate_number, count.model, count.year, rentalStartDate, rentalEndDate, price, "Szeged", "123456789", "contact@example.com");
    alert("Sikeres bérlés!");
        // window.location.href = '/';
}

  return (
    <section>
        <div className='rent-form'>
            <h1 className='rentform-title'>Bérlés véglegesítése</h1>
            <hr></hr>
                <Row>
                    <Col>
                    <Form.Group controlId="formCarName">
                        <Form.Label>Márka</Form.Label>
                        <Form.Control type="text" value={count.brand} disabled />
                    </Form.Group>
                    <Form.Group controlId="formCarModel">
                        <Form.Label>Modell</Form.Label>
                        <Form.Control type="text" value={count.model}  disabled />
                    </Form.Group>
                    <Form.Group controlId="formCarModel">
                        <Form.Label>Évjárat</Form.Label>
                        <Form.Control type="text" value={count.year} disabled />
                    </Form.Group>
                    <Form.Group controlId="formCarModel">
                        <Form.Label>Napi ár</Form.Label>
                        <Form.Control type="text" value={count.price} disabled />
                    </Form.Group>
                    <Form.Group controlId="formCarModel">
                        <Form.Label>Végösszeg</Form.Label>
                        <Form.Control type="text" value={`${getTotalPrice()} HUF`} disabled />
                    </Form.Group>
                    </Col>

                    <Col>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Teljes név</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group controlId="formUserPhoneNumber">
                        <Form.Label>Telefonszám</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group controlId="formUserEmail">
                        <Form.Label>Email cím</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group controlId="formUserLicenceNumber">
                        <Form.Label>Jogosítvány szám</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group controlId="formRentDays">
                        <Form.Label>Bérelt napok száma</Form.Label>
                        <Form.Control type="number" value={rentedDays} onChange={handleRentedDaysChange} required min={1} max={30} />
                    </Form.Group>
                    </Col>
                </Row>
                <button type="submit" onClick={rentCar} className='rent-final-button'>Bérlés</button>
        </div>
    </section>
  )
}

export default RentFormPage;