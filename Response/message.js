const sendSuccessResponse = function (req, res, message, data, key, code) {
    let responseObj = {
      statusCode: code ? code : 200,
      messages: message || ['Successful'],
    };
    key = key || 'data';
    if (data && data != '') {
      responseObj['data'] = data;
    }
    res.send(responseObj);
  };
  
  const sendErrorResponse = function (req, res, errors, data, code) {
    let responseObj = {
      statusCode: code ? code : 400,
      errors: errors || ['Error'],
    };
    responseObj['data'] = data || {};
    //res.status(500).send(responseObj);
    res.send(responseObj);
  };
  
  const BadRequetErrorObject = (message) => {
    return {
      name: 'Bad Request',
      message,
      code: 400,
    };
  };
  
  const NotDataAvailableRequetErrorObject = (message, data) => {
    return {
      name: 'Data Fetch Request',
      message,
      code: 400,
      data : data|| {}
    };
  };
  
  module.exports = {
    sendErrorResponse: sendErrorResponse,
    sendSuccessResponse: sendSuccessResponse,
    BadRequetErrorObject,
    NotDataAvailableRequetErrorObject,
  };