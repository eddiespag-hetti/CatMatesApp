import React from 'react';
import JobItem from './jobItem'; // Make sure the import path is correct
import './jobItem.css';

const CurrentJobs = ({ cats, idToken }) => {
  return (
    <div className="current-jobs">
    
      {cats
        .filter(cat => cat.owner.some(owner => owner.username === idToken.data.username))
        .flatMap(cat => cat.jobs)
        .map((job, index) => (
          <JobItem key={index} job={job} />
        ))
      }
    </div>
  );
};

export default CurrentJobs;
