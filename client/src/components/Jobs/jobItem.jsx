import React from 'react';
import './jobItem.css';

const JobItem = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3 className="job-title">{job.title}</h3>
      </div>
      <div className="job-card-body">
        <p className="job-description">{job.description}</p>
        <button className='edit-btn'>Update</button>
        <button className='delete-btn'>Remove</button>
      </div>
    </div>
  );
};

export default JobItem;
