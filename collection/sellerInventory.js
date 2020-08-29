const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sellerInventoryDetailSchema = new mongoose.Schema({
    sellerId: {
        type: Schema.Types.ObjectId,
        ref: 'sellerDetailModel',
        required: true,
    },
    skuCode: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    productDimession: {
        length: { 
            type: String,
            default: false
        },
        height: { 
            type: String,
            default: false
        },
        width: { 
            type: String,
            default: false
        }
    },
    productOffer: {
        type: Boolean,
        default: false
    },
    productDiscount: {
        type: Number
    }
});


mongoose.model('sellerInventoryDetailModel', sellerInventoryDetailSchema);