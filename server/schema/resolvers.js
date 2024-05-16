// Import necessary modules
const { AuthenticationError } = require("apollo-server-express");
const { User, Job } = require("../models");
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

    // addJob: async (parent, { title, description }, context) => {
    //   if (!context.user) {
    //     throw new AuthenticationError('You must be logged in to post a job');
    //   }

    //   try {
    //     // Add the job to the user's profile
    //     const updatedUser = await User.findByIdAndUpdate(
    //       context.user._id,
    //       { $push: { jobs: { title, description } } },
    //       { new: true }
    //     );

    //     return updatedUser;
    //   } catch (error) {
    //     console.error('Error adding job:', error);
    //     throw new Error('Failed to add job');
    //   }
    // },

    addJob: async (_, { title, description }) => {
      try {
        const job = new Job({ title, description });
        await job.save();
        return job;
      } catch (error) {
        throw new Error('Failed to add job');
      }
    },

 
  }
}
 

module.exports = resolvers;
