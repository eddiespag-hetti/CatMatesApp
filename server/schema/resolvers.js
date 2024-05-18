// Import necessary modules
const { AuthenticationError } = require("apollo-server-express");
const { User, Job, Cat } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate("jobs");

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

    addJob: async (parent, { title, description }, context) => {
      if (context.user) {
        const job = await Job.create({
          title,
          description,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { jobs: job._id } }
        );

        return job;
      }
      throw AuthenticationError;
      ("You need to be logged in!");
    },


// getCat: async (parent, { }),



    addCat: async (parent, { name, breed, age, temperament, ownerId }, context) => {
      if (context.user) {
        const cat = await Cat.create({
          name,
          breed,
          age,
          temperament,
          ownerId
        });
        return cat;
      }
      throw AuthenticationError;
      ("You need to be logged in!");
    },
  },
};

//     deleteJob: async (_, { id }) => {
//       try {
//         // Find the job by ID and delete it
//         await Job.findByIdAndDelete(id);
//         return true; // Return true if deletion is successful
//       } catch (error) {
//         console.error('Error deleting job:', error);
//         return false; // Return false if deletion fails
//       }
//     }
//   }

module.exports = resolvers;
