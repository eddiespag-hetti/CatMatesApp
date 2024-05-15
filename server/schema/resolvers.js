// Import necessary modules
const { AuthenticationError } = require("apollo-server-express");
const { User, userSchema } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect email or password!");
      }

      // Compare the incoming password with the hashed password
      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect email or password!");
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, args) => {
      console.log("Server- user side");
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
