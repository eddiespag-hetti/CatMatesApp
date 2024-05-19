const { Schema, model} = require("mongoose");
const Cat = require("../models/Cat"); // Import the Cat model

const bcrypt = require("bcrypt");


// Schema for each User
const userSchema = new Schema({
  firstName: {
    type: String,
    required: false,
    trim: true,
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
  },

username: {
  type: String,
  required: true,
  unique: true,
  trim: true,
},

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],


   // Embedding Cat model within User model
   cats: [{
    type: Schema.Types.ObjectId,
    ref: 'Cat'
  }],
  



});

// Set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
  
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
