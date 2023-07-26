const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const auth = async (req, res, next) => {
  if (
    req.headers.authorization
    && req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      // console.log('Token:  ', token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log('Decoded: ', decoded);

      req.user = await User.find({ email: decoded.email }).select('-password');
      // console.log('Sending User details to next controller', req.user);

      next();
    } catch (err) {
      res.send('Access denied!');
    }
  } else {
    res.send('Access denied. Kindly login');
  }
  return null;
};

module.exports = auth;
