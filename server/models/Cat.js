const { Schema, model } = require("mongoose");

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
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

// Model for each Cat
const Cat = model("Cat", catSchema);

// Exporting the Cat model
module.exports = Cat;
