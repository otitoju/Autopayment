const express = require('express');
const router = express.Router()
const customerController = require('../contollers/customerController')
const authToken = require('../contollers/authToken')

// CUSTOMER ROUTES
router.post('/login', customerController.loginCustomer);
router.post('/register', authToken, customerController.registerUser);
router.get('/get', authToken, customerController.getToken)