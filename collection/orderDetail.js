const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderDetailSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'userDetailModel',
        required: true,
    },
    sellerId: {
        type: Schema.Types.ObjectId,
        ref: 'sellerDetailModel',
        required: true,
    },
    orderDetails: [
        {
            subOrder: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            },
            skuCode: {
            type: String,
            required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            orderStatus: {
                type: String,
                default: "new",
                enum: ["new", "cancelled", "pending"]
            }
        }
    ],    
    orderNo: {
        type: Number
    },    
    orderDate: {
        type: Date, 
        default: Date.now
    },
    orderDeliverAt: {
        type: String
    }
});

mongoose.model('orderDetailModel', orderDetailSchema);