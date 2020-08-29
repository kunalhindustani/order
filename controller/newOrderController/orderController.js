const Response = require('./../../Response/message');
const orderModel = require('./../../model/order/newOrderModel');

let orderObj = {};

orderObj.addNewOrder = async function(req, res) {
    try {
        let lastRecordResult = await orderModel.fetchLastOrderNumber();
        if(lastRecordResult === "-1" ) {
            return Response.BadRequetErrorObject("Database is not working");
        }
        let inventoryResult = await orderModel.updateInventory(req);
        if(inventoryResult) {
            let saveResult = await orderModel.saveNewOrder(req, lastRecordResult);
            if(saveResult) {
                return Response.sendSuccessResponse(req, res, "Order is created successfully");
            }
            return Response.sendErrorResponse(req, res, "Order is not created");
        }
        return Response.sendErrorResponse(req, res, "Inventory is not updated");
    } catch(error) {
        return Response.sendErrorResponse(req, res, error.message);
    }
}

module.exports = orderObj;