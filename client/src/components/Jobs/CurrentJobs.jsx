// CurrentJobs.jsx
import React from 'react';

const CurrentJobs = ({ cats, idToken }) => {
  const currentJobs = cats
    .filter(cat => cat.owner.some(owner => owner.username === idToken.data.username))
    .flatMap(cat => cat.jobs);

  return (
    <div>
      {currentJobs.length > 0 ? (
        currentJobs.map((job, index) => (
          <div key={index}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </div>
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default CurrentJobs;
