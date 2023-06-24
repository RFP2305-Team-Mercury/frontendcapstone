import React from 'react';
import {useSelector} from 'react-redux'
import ReviewList from './ReviewList.jsx';
import sampleData from './sampleReviews.js';

const RatingsAndReviews = () => {
  let productId = useSelector(state=>state.productId);
  return (
    <div>
      <h2>Ratings and Reviews</h2>
      <ReviewList reviews={sampleData.results} />
    </div>
  );
};

export default RatingsAndReviews;