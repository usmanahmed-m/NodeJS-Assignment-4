const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).exec();
  if (user && (password === user.password)) {
    res.json({
      message: 'You are now logged in',
      generateToken: generateToken(user.email),
    });
  } else {
    res.send('Invalid Email or password or user doesnot exist');
  }
};

const signUp = async (req, res) => {
  const {
    name, email, password, isAdmin,
  } = req.body;

  const userExist = await User.findOne({ email }).exec();

  if (userExist) {
    return res.send('User already exists');
  }

  const user = await User.create({
    name, email, password, isAdmin,
  });
  // console.log(user);

  if (user) {
    res.json({
      message: 'Thank you for registering.',
      token: generateToken(user.email),
    });
  } else {
    return res.send('Invalid user data');
  }
  return null;
};

module.exports = { loginUser, signUp };
