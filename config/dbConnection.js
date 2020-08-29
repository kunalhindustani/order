var mongoose = require('mongoose');

function connectWithMongodb() {
  mongoose.connect(MONGO_URL + DB_NAME, (error) => {
    if (!error) {
      console.log('Connection with mongodb is successfully establish');
      return true;
    }
    console.log('Error while connect with mongo db ', JSON.stringify(error));
    return false;
  });

  
}





connectWithMongodb();

require('./../collection/sellerDetail');
require('./../collection/userDetail');
require('./../collection/sellerInventory');
require('./../collection/orderDetail');
require('./../collection/useLogInDetails');
