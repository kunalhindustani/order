const Response = require('./../Response/message');
const JWT = require('jsonwebtoken');
const mongoose = require('mongoose');
const UseLogIn = mongoose.model('userLogInModel');
var userAuthorizarionObj = {};

userAuthorizarionObj.authForRequest = async function (req, res, next) {
  try {
    const fetchToken = req && req.headers && req.headers["authtoken"] ? req.headers["authtoken"] : null;
    if (!fetchToken) {
      throw { message: 'Token is required' };
    }

    const decodeToken = await JWT.verify(fetchToken, process.env.PRIIVATE_KEY);
    if (!decodeToken) {
      throw { message: 'Invalid token' };
    }

    const userResult = await UseLogIn.findOne({ userId: decodeToken.userId, userAuthToken: fetchToken }).populate('userId');


    if (!userResult && !userResult.userId) {
      throw { message: 'User is not logged In' };
    }

    if (!userResult.userId.isEmailVerified) {
      throw {
        message: 'Email not verified',
        isEmailVerified: userResult.userId.isEmailVerified,
        isVerified: userResult.userId.isVerified,
        email: userResult.userId.email
      };
    }

    if (!userResult.userId.isVerified) {
      throw {
        message: 'User not verified',
        isEmailVerified: userResult.userId.isEmailVerified,
        isVerified: userResult.userId.isVerified,
        email: userResult.userId.email
      };
    }

    req.userData = userResult.userId;
    next();

  } catch (error) {
    return Response.sendErrorResponse(req, res, [error.message], {
      isVerified: error.isVerified,
      isEmailVerified: error.isEmailVerified,
      userId: error.userId,
      email: error.email
    });
  }
}

module.exports = userAuthorizarionObj;