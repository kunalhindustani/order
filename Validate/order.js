const { Joi } = require('celebrate');

exports.userOrderValidation = {
    email: Joi.string().required().error(new Error('Email is a required field!')),
    skuCode: Joi.string().required().error(new Error('Sku code is required')),
    qtyOrder: Joi.number().integer().greater(0).required().error(new Error('Quantity is required')),
    sellerId: Joi.string().required().error(new Error ('Seller Id is required')),
};
