const express = require('express');
const registration = require('./routes/user')
const Userlogin = require('./routes/login');
const carsRoutes = require('./routes/cars');
const rentRoutes = require('./routes/rents');
const rentModel = require('./models/rent');
const app = express();
app.use(express.json());


// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});


// Mount the User router at the /sign-up URL path
app.use(registration);
app.use(Userlogin);
app.use('/cars', carsRoutes);
app.use(rentRoutes);

// app.use('/registration', registration);
// app.use('/login', login);

// Set the port number using the PORT environment variable
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
