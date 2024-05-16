import React from 'react';
import './jobItem.css';

const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <p>Your Jobs</p>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
    </div>
  );
};

export default JobItem;

