import React, { useState } from 'react';
// import {Navigate, useParams} from 'react-router-dom';
import Auth from '../utils/auth';
import '../index.css'; // Import the provided CSS file

const ProfilePage = () => {
  
const idToken = Auth.getProfile()




  const [jobFormData, setJobFormData] = useState({
    title: '',
    description: '',
    // Add more fields as needed
  });

  // Function to handle input changes in job posting form
  const handleJobFormChange = (event) => {
    const { name, value } = event.target;
    setJobFormData({
      ...jobFormData,
      [name]: value
    });
  };

  // Function to handle job posting form submission
  const handleSubmitJobForm = (event) => {
    event.preventDefault();
    // Implement logic to post job using jobFormData
    console.log('Job Form Data:', jobFormData);
    // Clear the form fields after submission
    setJobFormData({
      title: '',
      description: '',
      // Reset other fields as needed
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-info">
        <h2>{idToken.data.username}'s Profile</h2>
        <p>Email: {idToken.data.email}</p>
        {/* Add more member information as needed */}
      </div>
      
   

      <div className="job-form">
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmitJobForm}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={jobFormData.title}
              onChange={handleJobFormChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={jobFormData.description}
              onChange={handleJobFormChange}
              required
            />
          </div>
          {/* Add more fields to the job posting form as needed */}
          <button type="submit">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
