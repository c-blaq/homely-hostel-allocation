const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  name: { type: String, min: 3, max: 255, required: true },
  email: { type: String, min: 3, max: 255, required: true },
  password: { type: String, min: 6, max: 25, required: true },
});

let User = mongoose.model('User', userSchema);

function validateUser(user) {
  let schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).email().required(),
    password: Joi.string().min(8).max(25).required(),
  });

  return schema.validate(user, { abortEarly: false });
}

function validateLogin(user) {
  let schema = Joi.object({
    email: Joi.string().min(3).max(255).email().required(),
    password: Joi.string().min(6).max(25).required(),
  });
  return schema.validate(user, { abortEarly: false });
}

exports.User = User;
exports.validateUser = validateUser;
exports.validateLogin = validateLogin;
