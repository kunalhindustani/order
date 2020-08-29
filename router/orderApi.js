const express = require('express');
const router = express.Router();
const { celebrate, Joi } = require('celebrate');
const { userOrderValidation } = require('./../Validate/order');
const AuthController = require('./../Middleware/auth');
const AddNewOrderController = require('./../controller/newOrderController/orderController');

//todo first parameter is AuthController for verify the user
router.post('/api/order/createNew', 
    celebrate({ body: userOrderValidation })
    //,
    //AddNewOrderController.addNewOrder
);

module.exports = router;