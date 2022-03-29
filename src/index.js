require('dotenv').config();

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const { setupRoutes } = require('./routes');

const PORT = process.env.PORT || 8000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

setupRoutes(app);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((err) => console.log('could not connect to mongodb'));

app.listen(PORT, () => {
  console.log('Server stared on port %d', PORT);
});
