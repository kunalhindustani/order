const mongoose = require('mongoose');

const sellerDetailSchema = new mongoose.Schema({
    sellerFirstName: {
        type: String,
        required: true
    },
    sellerMiddleName: {
        type: String,
        required: true
    },
    sellerLastName: {
        type: String,
        required: true
    },
    sellerOfficeAddress: {
        sellerAddress1: {
        type: String,
        required: true
        },
        sellerAddress2: {
            type: String
        },
        sellerCity: {
            type: String,
            required: true
        },
        sellerState: {
            type: String,
            required: true
        },
        sellerPinCode: {
            type: Number,
            required: true
        }
    },
    
    sellerMobileNumber: {
        type: Number,
        required: true
    },
    sellerEmail: {
        type: String,
        required: true
    },
    isAccountVerify: {
        type: Boolean,
        default: false
    },
    sellerStatus: {
        type: Boolean,
        default: false
    },
    sellerRegistartionDate: {
        type: Date,
        required: true,
    }
});


mongoose.model('sellerDetailModel', sellerDetailSchema);