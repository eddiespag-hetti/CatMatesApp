// Import necessary modules
const { AuthenticationError } = require("apollo-server-express");
const { User, Job, Cat } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {

  Query: {
  //   getUserById: async (_, { userId }) => {
  //     try {
  //       return await User.findById(userId);
  //     } catch (err) {
  //       throw new AuthenticationError('Failed to fetch user');
  //     }
  //   },
  //   getCatsByOwnerId: async (_, { ownerId }) => {
  //     try {
  //       return await Cat.find({ ownerId });
  //     } catch (err) {
  //       throw new AuthenticationError('Failed to fetch cats');
  //     }
  //   },
  //   getJobById: async (_, { jobId }) => {
  //     try {
  //       return await Job.findById(jobId);
  //     } catch (err) {
  //       throw new AuthenticationError('Failed to fetch job');
  //     }
  //   },
  // },

  },

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
      throw AuthenticationError("You need to be logged in!");
    },
    addCat: async (_, args) => {
      try {
        const newCat = await Cat.create(args);
        return newCat;
      } catch (err) {
        throw new Error('Failed to create cat');
      }
    },

    },
  }

  
  module.exports = resolvers;




// getCat: async (parent, { }),



// addCat: async (_, { name, breed, age, temperament, ownerEmail }) => {
//   const owner = await User.findOne({ email: ownerEmail });
//   if (!owner) {
//     throw new Error('Owner not found');
//   }
//   const cat = new Cat({
//     name,
//     breed,
//     age,
//     temperament,
//     owner: owner._id
//   });
//   await cat.save();
//   return cat;
// },





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

