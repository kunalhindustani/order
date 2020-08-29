
require('./config/constant');
require('./config/dbConnection');

const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


dotenv.config();




app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: 'true' }));
  app.use(bodyParser.json({ type: 'application/x-www-form-urlencoded' }));
  
  app.use(cors());
  
  app.use((req, res, next) => {
    console.log('The request from the user is ', req.headers);
    next();
  });

  app.use(require('./router/orderApi'));
   
  const server = app.listen(process.env.PORT, () => {
    console.log('The application run on the port ', process.env.PORT);
  });

