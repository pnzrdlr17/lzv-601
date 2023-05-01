//can't store token in body, as there isn't one always
//can use url, query params
const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');

//using headers instead
module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  let token;
  try {
    token = req.headers.authorization.split(' ')[1]; //Authorization : 'Bearer TOKEN'
    if (!token) {
      throw new Error('Auth-failed!');
    }
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return next(new HttpError('Authentication Failed!', 401));
  }
};
