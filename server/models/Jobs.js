// Import the Mongoose module and create a new Schema object
const { Schema, model } = require("mongoose");

// Define the schema for a job posting
const jobSchema = new Schema({
  // The job title is a required string
  title: {
    type: String,
    required: true,
  },
  // The job description is a required string
  description: {
    type: String,
    required: true,
  },
});

// Create a new Mongoose model using the job schema
const Job = model("Job", jobSchema);

// Export the Job model for use in other modules
module.exports = Job;