import React from "react";
import './loginPage.css';
import { useState } from "react"

const Login = () => {

    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
       
        //Connect to the backend
        try{
            fetch('http://127.0.0.1:8080/login',{
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if (!res.ok) {
                      setError('Hibás email cím vagy jelszó!');
                      throw new Error('Login failed');
                    }
                    return res.json();
                  })
                  .then(data => {
                    if (data.token) {
                      // Save the token to the local storage
                      console.log("Login success \n Token generated success");
                    //   setIsLoggedIn(true);
                      localStorage.setItem('jwt', data.token);
          
                      alert("Sikeresen bejelentkezett az oldalra!")
                      window.location.href = '/'
                      // redirect the user to the dashboard               
                    }
                  });
        }catch(err){
            console.log('Error during login: ', err);
        }
    }
        return (
            <div className="external-container">
              <div className="form-container">
                <h1 className="login-title">Bejelentkezés</h1>
                <form onSubmit={handleSubmit}>
                  <input type="email" name="email" id="email" required placeholder="Email cím" />
                  <input type="password" name="password" id="password" required placeholder="Jelszó" />
                  {error && <div className="error">{error}</div>}
                  <label><a className="no-account" href="./registration">Nincs még fiókod? Regisztrálj!</a></label> 
                  <button name="login" id="login" type="submit">Bejelentkezés</button>
                </form>
              </div>
              <div className="image-container"></div>
            </div>
          );
}
export default Login;

