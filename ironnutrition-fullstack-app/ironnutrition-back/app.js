require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes.js');

const app = express();

mongoose.connect('mongodb://localhost/my-first-api', { useNewUrlParser: true })
  .then(() => console.log('connected to mongo database!'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '10mb' }));

app.use(morgan('dev'));

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use('/api', apiRoutes);

app.listen(5000, () => console.log('server running on PORT 5000'));

module.exports = app;
