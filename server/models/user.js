const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  name: {
    type: String,
    required: true,
    maxlength: 15
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 15
  },
  cart: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

userSchema.pre('save',function(next) {
  const user = this;
  if(!user.isModified('password')) return next();
  
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if(err) return next(err);
    
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);

      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model('User', userSchema);
module.exports = User;