const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Assignment 3 & 4');
});

module.exports = router;
