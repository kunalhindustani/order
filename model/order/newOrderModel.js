const mongoose = require('mongoose');
const NewOrder = mongoose.model('orderDetailModel');
const Inventory = mongoose.model('sellerInventoryDetailModel');

let newOrderObj = {};

//It save the new order detail.
newOrderObj.saveNewOrder = async function(orderObj, orderNumberObj) {
    return new Promise(async function(resolve, reject) {
        let countResult = await NewOrder().count();
        orderObj.orderId = orderNumberObj.newOrderID;
        orderObj.orderNo = parseInt(orderNumberObj.newOrderNumber);
        NewOrder.save(orderObj, (error, saveData) => {
            if(error) {
                console.log("The error is while inserting the new order is ", error);
                return reject(false);
            }
            return resolve(true);
        });
    });
}

//It fetch the last order no and if it is first order then take the default order from enviroment file.
newOrderObj.fetchLastOrderNumber = async function() {
    return new Promise(async function(resolve, reject) {
        NewOrder.find({}).sort({ orderDate: -1 }).limit(1).exec((error, result) => {
            console.log("The last record is ", error);
            if(error) {
                return reject("-1");
            }
            console.log("The result for last record is ", result);
            let orderNumberObj = {};
            if(result && result[0] && result[0].orderNo) {
                orderNumberObj.newOrderID = process.env.ORDER_NO_START_WITH + (result[0].orderNo + 1);
                orderNumberObj.newOrderNumber = result[0].orderNo + 1;
                return resolve(orderNumberObj);
            }
            orderNumberObj.newOrderID = process.env.ORDER_NO_START_WITH + process.env.ORDER_NO_DEFAULT;
            orderNumberObj.newOrderNumber = process.env.ORDER_NO_DEFAULT;
            return resolve(orderNumberObj);
        });
    });
}

//It check the inventory is valid or not for particular seller and sku code.
newOrderObj.updateInventory = async function(reqObj) {
    return new Promise( async (resolve, reject) => {
        let matchQuery = { 
            'sellerId': reqObj.sellerId, 
            'skuCode': reqObj.skuCode, 
            'quantity': 
                { $gte: reqObj.qtyOrder  } 
        };
        Inventory.findOneAndUpdate(matchQuery, {
            $set: {
                'quantity': { '$inc': -reqObj.qtyOrder }
            }
        }, (error, update) => {
            if(error) {
                return reject(0);
            }
            return resolve(update);
        });
    });
}

module.exports = newOrderObj;

