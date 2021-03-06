const mongoose = require('mongoose');
const Food = require('../models/Foods');

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

const foods = [
  {
    name: 'Pizza',
    calories: 400,
    image: 'https://i.imgur.com/eTmWoAN.png',
  },
  {
    name: 'Salad',
    calories: 150,
    image: 'https://i.imgur.com/DupGBz5.jpg',
  },
  {
    name: 'Sweet Potato',
    calories: 120,
    image: 'https://i.imgur.com/hGraGyR.jpg',
  },
  {
    name: 'Gnocchi',
    calories: 500,
    image: 'https://i.imgur.com/93ekwW0.jpg',
  },
  {
    name: 'Pot Roast',
    calories: 350,
    image: 'https://i.imgur.com/WCzJDWz.jpg',
  },
  {
    name: 'Lasagna',
    calories: 750,
    image: 'https://i.imgur.com/ClxOafl.jpg',
  },
  {
    name: 'Hamburger',
    calories: 400,
    image: 'https://i.imgur.com/LoG39wK.jpg',
  },
];

Food.insertMany(foods)
  .then(() => {
    console.log('foods inserted');
    mongoose.connection.close();
  });
