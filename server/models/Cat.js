const mongoose = require("mongoose");

const { Schema } = mongoose;

// Schema for each Cat
const catSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    unique: true,
  },
  temperament: {
    type: String,
    required: true,
    unique: true,
  },
  ownerEmail: {
    type: String,
    required: true,
    unique: true,
  }
});


// Model for each Cat
const Cat = mongoose.model("Cat", catSchema);

// Exporting the Cat model
module.exports = Cat;