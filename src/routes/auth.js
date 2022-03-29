const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth');

const registerRoute = express.Router();
const loginRoute = express.Router();

registerRoute
  .route('/')
  .get((_, res) => {
    res.render('sign-up');
  })
  .post(registerUser);

loginRoute
  .route('/')
  .get((_, res) => {
    res.render('sign-in');
  })
  .post(loginUser);

module.exports = { registerRoute, loginRoute };
