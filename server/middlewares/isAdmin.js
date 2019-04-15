const admin = (req, res, next) => {
  if(req.user.role === 0) return res.send('You are not an admin, so get the f*ck out!');
  next();
}

module.exports = admin;