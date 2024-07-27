import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './RatingStar.css';

function RatingStars({ rating }) {
  // Calculate the number of filled stars
  const filledStars = Math.round(rating);

  // Create an array of 5 stars (fixed number)
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={`star-${index}`}
      icon={faStar}
      className={index < filledStars ? 'star-icon filled' : 'star-icon'}
    />
  ));

  return (
    <div className="rating-stars">
      {stars}
    </div>
  );
}

export default RatingStars;
