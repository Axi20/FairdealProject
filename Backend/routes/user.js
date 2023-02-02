const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Map the /sign-up URL path to the User controller's signUp method
router.post('/registration', userController.signUp);

// Export the User router
module.exports = router;
