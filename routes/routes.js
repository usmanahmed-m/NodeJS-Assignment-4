const express = require('express');
const home = require('./home');
const login = require('./login');
const signup = require('./signup');
const category = require('./category');
const cart = require('./cart');
const checkout = require('./checkout');
const product = require('./product');

const routes = (app) => {
  app.use(express.json());
  app.use('/', home);
  app.use('/login', login);
  app.use('/signup', signup);
  app.use('/cart', cart);
  app.use('/category', category);
  app.use('/checkout', checkout);
  app.use('/product', product);
};

module.exports = routes;
