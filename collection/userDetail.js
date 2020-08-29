const mongoose = require('mongoose');

const userDetailSchema = new mongoose.Schema({
    userFirstName: {
        type: String,
        required: true
    },
    userMiddleName: {
        type: String,
        required: true
    },
    userLastName: {
        type: String,
        required: true
    },
    userOfficeAddress: {
        userAdress1: {
            type: String,
        },
        userAdress2: {
            type: String
        },
        userAddressLandMark: {
            type: String
        },
        userCity: {
            type: String,
        },
        userState: {
            type: String,
        },
        serPinCode: {
            type: Number,
        }
    },
    userHomeAddress: {
        userAdress1: {
            type: String,
        },
        userAdress2: {
            type: String
        },
        userCity: {
            type: String,
        },
        userState: {
            type: String,
        },
        userAddressLandMark: {
            type: String
        },
        serPinCode: {
            type: Number,
        }
    },
    userMobileNumber: {
        type: Number,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userStatus: {
        type: Boolean,
        default: false
    },
    isAccountVerify: {
        type: Boolean,
        default: false
    },
    userRegistartionDate: {
        type: Date,
        required: true,
    },
    userDeliveryDefaultAdress: {
        type: String,
        enum: ["OfficeAddress", "HomeAddress"]
    }
});


mongoose.model('userDetailModel', userDetailSchema);