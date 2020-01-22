const mongoose = require('mongoose');

const { Schema } = mongoose;

const FoodSchema = new Schema({
  name: String,
  calories: Number,
  image: String,
},
{
  timestamps: true,
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
