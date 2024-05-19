import React from 'react';
import '../CatCard/CatCard.css';

const CatCard = ({ cat }) => {
  // Construct the path to the image in the public folder
  const imagePath = `${process.env.PUBLIC_URL}../public/img/${cat.image}`;

  return (
    <div className="cat-card">
      <img src={imagePath} alt={cat.name} className="cat-image" />
      <h2 className="cat-name">{cat.name}</h2>
      <p className="cat-info">Breed: {cat.breed}</p>
      <p className="cat-info">Age: {cat.age}</p>
      <p className="cat-info">Temperament: {cat.temperament}</p>
      <button className="sit-btn">View Jobs</button>
      <button className="review-btn">Reviews</button>
    </div>
  );
};

export default CatCard;




