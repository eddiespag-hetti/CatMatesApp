// CatCard.js

import React from 'react';
import '../CatCard/CatCard.css';

const CatCard = ({ cat }) => {
  console.log(cat)
  return (
    <div className="cat-card">
      
      <h2 className="cat-name">{cat.name}</h2>
      <p className="cat-info">Breed: {cat.breed}</p>
      <p className="cat-info">Age: {cat.age}</p>
      <p className="cat-info">Temperament: {cat.temperament}</p>
      {/* Add more information as needed */}
      <button className="sit-btn">View Jobs</button>
      <button className="review-btn">Reviews</button>
    </div>
  );
};

export default CatCard;
