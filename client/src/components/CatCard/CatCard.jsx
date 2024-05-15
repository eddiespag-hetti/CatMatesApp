// CatCard.js

import React from 'react';
import '../CatCard/CatCard.css';

const CatCard = ({ name, breed, age, temperament }) => {
  return (
    <div className="cat-card">
      <h2 className="cat-name">{name}</h2>
      <p className="cat-info">Breed: {breed}</p>
      <p className="cat-info">Age: {age}</p>
      <p className="cat-info">Temperament: {temperament}</p>
      {/* Add more information as needed */}
      <button className="sit-button">Sit Me</button>
    </div>
  );
};

export default CatCard;
