const isAdmin = (req, res, next) => {
  // console.log(req.user[0].isAdmin);
  if (!req.user[0].isAdmin) return res.send('Unauthorized Attempt.');
  return next();
};

module.exports = isAdmin;
