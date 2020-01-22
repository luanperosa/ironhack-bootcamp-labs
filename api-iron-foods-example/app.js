require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const apiRoutes = require('./routes/api-routes.js');

const app = express();

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((con) => {
  console.log(`Connected ${con.connections[0].name}`)
})
.catch((err) => {
  console.log(`Fail to connect ${err}`)
});

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
