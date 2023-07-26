const jwt = require('jsonwebtoken');

const generateToken = (email) => jwt.sign({ email }, process.env.JWT_SECRET, {
  expiresIn: '1d',
});
module.exports = generateToken;
