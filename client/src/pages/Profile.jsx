import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { POST_JOB } from '../utils/mutations';
import JobItem from '../components/Jobs/jobItem.jsx';
import CatCard from '../components/CatCard/CatCard.jsx';
import Auth from '../utils/auth';
import '../index.css';
import { QUERY_CATS } from '../utils/queries';

const ProfilePage = () => {
  const idToken = Auth.getProfile();
  console.log(idToken);

  const [jobFormData, setJobFormData] = useState({
    title: '',
    description: '',
  });

  const { loading, data, refetch } = useQuery(QUERY_CATS);
  const cats = data?.getCats || [];
  console.log(cats);

  const [postJob] = useMutation(POST_JOB, {
    update(cache, { data: { postJob } }) {
      try {
        const { getCats } = cache.readQuery({ query: QUERY_CATS });

        const updatedCats = getCats.map(cat => {
          if (cat.owner.some(owner => owner.username === Auth.getProfile().data.username)) {
            return {
              ...cat,
              jobs: [...cat.jobs, postJob]
            };
          }
          return cat;
        });

        cache.writeQuery({
          query: QUERY_CATS,
          data: { getCats: updatedCats },
        });
      } catch (e) {
        console.error(e);
      }
    },
    onCompleted: () => {
      refetch();
    }
  });

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
      await postJob({
        variables: {
          title: jobFormData.title,
          description: jobFormData.description
        }
      });
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
        <h2>Welcome back {idToken.data.username}!</h2>
      </div>
      <div className="user-cat">
        {!loading ? cats.map(cat => cat.owner.filter(owner => owner.username === Auth.getProfile().data.username).map(user => <CatCard cat={cat} key={cat._id} />)) : ""}
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
          {cats
            .filter(cat => cat.owner.some(owner => owner.username === idToken.data.username))
            .flatMap(cat => cat.jobs)
            .map((job, index) => (
              <JobItem key={index} job={job} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
