import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { POST_JOB } from '../utils/mutations'; // Import the GraphQL mutation
import Auth from '../utils/auth';
import '../index.css'; // Import the provided CSS file

const ProfilePage = () => {
  const idToken = Auth.getProfile();

  const [jobFormData, setJobFormData] = useState({
    title: '',
    description: '',
  });

  const [postJob] = useMutation(POST_JOB); // Define the mutation function

  const handleJobFormChange = (event) => {
    const { name, value } = event.target;
    setJobFormData({
      ...jobFormData,
      [name]: value
    });
  };

  const handleSubmitJobForm = async (event) => {
    event.preventDefault();
    try {
      // Call the mutation with the jobFormData
      await postJob({
        variables: {
          title: jobFormData.title,
          description: jobFormData.description
        }
      });
      // Clear the form fields after submission
      setJobFormData({
        title: '',
        description: ''
      });
      console.log('Job posted successfully!');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-info">
        <h2>{idToken.data.username}'s Profile</h2>
        <p>Email: {idToken.data.email}</p>
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
          <button type="submit">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;




