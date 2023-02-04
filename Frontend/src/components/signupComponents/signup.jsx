import React from "react";
import './signupPage.css';
import { useState } from "react"

const Signup = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [driving_licence, setDriving_licence] = useState("")
    const [password, setPassword] = useState("")
    const [email_error, setEmailError] = useState(""); // new state variable to keep track of the error message
    const [password_error, setPasswordError] = useState(""); 

    
        const handleSubmit = async (e) => {
            e.preventDefault()
    
             // Password validation
            if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password)) {
                setPasswordError("A jelszónak legalább 8 karakterből kell állnia, \n tartalmaznia kell nagybetűt, kisbetűt, számot és speciális karaktert!");
            return;
    }

            //Connection with the backend
            try {
                const res = await fetch('http://127.0.0.1:8080/registration', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ firstname, lastname, email, phone_number, driving_licence, password })
                });
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const user = await res.json();
                console.log('Successfully created user: ', user);
            } catch (err) {
                if (err.message === "Bad Request") {
                    setEmailError("A megadott email cím már használatban van!");
                } else {
                    console.log('Error creating user: ', err);
                    setError("Hiba történt a regisztráció közben, kérjük próbálja meg újra!");
                }
            }
        }

    return (
        <div className="external-container">
          <div className="form-container">
            <h1 className="signup-title">Regisztráció</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" name="firstname" id="firstname" placeholder="Vezetéknév" required  onChange={(e) => setFirstname(e.target.value)} value={firstname} />
              <input type="text" name="lastname" id="lastname" placeholder="Keresztnév" required onChange={(e) => setLastname(e.target.value)} value={lastname} />
              <input type="email" name="email" id="email" placeholder="Email cím" required  onChange={(e) => setEmail(e.target.value)} value={email}/>
              <input type="text" name="phone" id="phone" placeholder="Telefonszám" required onChange={(e) => setPhone_number(e.target.value)} value={phone_number} />
              <input type="text" name="licence" id="licence" placeholder="Jogosítvány szám" required  onChange={(e) => setDriving_licence(e.target.value)} value={driving_licence} />
              <input type="password" name="password" id="password" placeholder="Jelszó" required onChange={(e) => setPassword(e.target.value)} value={password}/>
              {email_error && <div className="error">{email_error}</div>}
              {password_error && <div className="error">{password_error}</div>}
              <label><a className="have-account" href="./login">Már van fiókod? Bejelentkezés</a></label> 
              <button name="signup" id="signup" type="submit">Regisztráció</button>
            </form>
          </div>
          <div className="image-container"></div>
        </div>
      );
}

export default Signup;

