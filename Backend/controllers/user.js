const User = require('../models/User');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

// Method to handle POST requests to the /users/sign-up URL path
class UserController{
 
  static async signUp(req, res) {

    const dbConfig = {
      host: 'localhost',
      user: 'root',
      password: 'mysql',
      database: 'car_database'
    };

    // Connect to the database
    const conn = mysql.createConnection(dbConfig);

    async function validateSignUp(email) {
      // Query the database to check if a sign-up with the same email already exists
      const query = 'SELECT * FROM customers WHERE email = ?';
      const [results] = await conn.promise().query(query, [email]);
      return results.length > 0;
    }

  // Validate request data
    if (!req.body.firstname || !req.body.lastname || !req.body.email 
      || !req.body.phone_number || !req.body.driving_licence || !req.body.password ) {
      return res.status(400).send({ error: 'Firstname, Lastname, Email, Mobile, Driving Licence number, and password are required!' });
    }

  //REGEX validations
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email)) {
      return res.status(400).send({ error: 'Invalid email address' });
    }
    
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(req.body.password)) {
      return res.status(400).send({ error: 'Password must be at least 8 characters long and contain lowercase, uppercase, and numeric characters' });
    }

  // Encrypt the password
    const hash = bcrypt.hashSync(req.body.password, 10);

  // Validate that the email is unique
    const emailExists = await validateSignUp(req.body.email);
    if (emailExists) {
      return res.status(400).send({ error: 'Email already in use' });
    }

    const user = new User('id', req.body.firstname, req.body.lastname, req.body.email, req.body.phone_number, req.body.driving_licence, hash);
    user.create((userId) => {
      console.log(`Added user with ID ${userId} to the database`);
        });
      
  // Generate a response
    res.status(201).send({ user: user });
  }
}

module.exports = UserController;