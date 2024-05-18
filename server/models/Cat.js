const { Schema, model } = require("mongoose");
const User = require('../models/User')

// Schema for each Cat
const catSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  temperament: {
    type: String,
    required: true,
  },
// Embedding User model within Cat model
  owner: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
// References the User Schema
 
});

// Model for each Cat
const Cat = model("Cat", catSchema);

// Exporting the Cat model
module.exports = Cat;
