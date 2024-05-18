import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { GET_CAT } from '../utils/mutations.js';
import { POST_JOB } from '../utils/mutations'; // Import the GraphQL mutation
import JobItem from '../components/Jobs/jobItem.jsx'; // Import the JobItem component
import CatCard from '../components/CatCard/CatCard.jsx';
import Auth from '../utils/auth';
import '../index.css'; // Import the provided CSS file

const ProfilePage = () => {
  const idToken = Auth.getProfile();
  console.log(idToken);

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


   // Use the useQuery hook to fetch the user's cat information
   const { loading, error, data } = useQuery(GET_CAT, {
    variables: { cat: 'catName' }, // Pass the cat's name as a variable
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { getCat: cat } = data; // Extract the cat object from the query resu



  return (
    <div className="profile-container">
      <div className="profile-info">
        <h2>Welcome back {idToken.data.username}!</h2>
        {/* <p>Email: {idToken.data.email}</p> */}
      </div>
      <div className="user-cat">
      <CatCard 
          name={cat.name}
          breed={cat.breed}
          age={cat.age}
          temperament={cat.temperament}
      />
      </div>

   <div className='jobs-container'>
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
  <div className="current-jobs">
    <h2 className="job-heading">Your Current Jobs:</h2>
    {/* Map over the user's jobs and render each as a JobItem */}
    {idToken.data?.jobs?.map((job, index) => (
      <JobItem key={index} job={job}/>
    ))}
  </div>
  </div>
</div>

);
}










export default ProfilePage;




