const User = require('../models/user');

const register = (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if(err) res.json({success: false, err});

    res.status(200).json({
      success: true,
      userdata: doc
    })
  })
}

module.exports = {
  register
}