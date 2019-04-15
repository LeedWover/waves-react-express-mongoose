const User = require('../models/user');

const auth = (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    cart: req.user.cart,
    history: req.user.history
  });
}

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

const login = (req, res) => {
  User.findOne({'email': req.body.email}, (err, user) => {
    if(!user) return res.json({loginSuccess: false, message: 'Auth fails, email not found!'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) return res.json({loginSuccess: false, message: 'Wrong password!'});

      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err);
        res.cookie('w_auth', user.token).status(200).json({
          loginSuccess: true
        })
      });
    });
  });
}

module.exports = {
  auth,
  register,
  login
}