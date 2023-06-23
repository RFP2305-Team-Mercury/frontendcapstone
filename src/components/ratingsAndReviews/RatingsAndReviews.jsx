import React from 'react';
import ReviewList from './ReviewList.jsx';
import sampleData from './sampleReviews.js';

const RatingsAndReviews = () => {
  return (
    <div>
      <h2>Ratings and Reviews</h2>
      <ReviewList reviews={sampleData.results} />
    </div>
  );
};

export default RatingsAndReviews;