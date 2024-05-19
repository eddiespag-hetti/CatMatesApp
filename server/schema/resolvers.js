// Import necessary modules
const { AuthenticationError } = require("apollo-server-express");
const { User, Job, Cat } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    getUserById: async (parent, { userId }) => {
      try {
        return await User.findById(userId).populate("jobs");
      } catch (err) {
        throw new AuthenticationError('Failed to fetch user');
      }
    },
    getCatsByOwnerId: async (parent, { ownerId }) => {
      try {
        return await Cat.find({ ownerId });
      } catch (err) {
        throw new AuthenticationError('Failed to fetch cats');
      }
    },
    getJobById: async (parent, { jobId }) => {
      try {
        return await Job.findById(jobId);
      } catch (err) {
        throw new AuthenticationError('Failed to fetch job');
      }
    },
    getCats: async (parent, args, context) => {
      if (context) {
        let cats = await Cat.find().populate('owner');
        return cats;
      }
      throw new AuthenticationError('Failed to fetch cats');
    },
    jobs: async () => {
      return await Job.find();
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate("jobs");

      if (!user) {
        throw new AuthenticationError("Incorrect email or password!");
      }

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect email or password!");
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addJob: async (parent, { title, description }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      try {
        const job = await Job.create({
          title,
          description,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { jobs: job._id } }
        );
        // You might want to also add the job to the appropriate cat if there's a relationship
        return job;
      } catch (error) {
        throw new Error("Failed to add job");
      }
    },

    addCat: async (parent, args) => {
      try {
        const newCat = await Cat.create(args);
        return newCat;
      } catch (err) {
        throw new Error('Failed to create cat');
      }
    },
  }
};

module.exports = resolvers;
