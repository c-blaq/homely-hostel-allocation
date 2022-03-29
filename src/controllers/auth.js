const bcrypt = require('bcrypt');
const { User, validateLogin, validateUser } = require('../models/user');

const registerUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.send('User already exists');
    }

    user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.redirect('/sign-in');
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    console.log(error);
    if (error) {
      return res.send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email });
    const confirmPw = await bcrypt.compare(req.body.password, user.password);
    if (!user || !confirmPw) {
      return res.send('Incorrect username or password');
    }
    res.send('Logged in');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser, loginUser };
