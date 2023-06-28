import React from 'react';
import {useSelector} from 'react-redux'
import ReviewList from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';

import sampleReviews from './sampleReviews.js';
import sampleReviewMeta from './sampleReviewMeta.js';

const RatingsAndReviews = () => {
  let productId = useSelector(state=>state.productId);
  return (
    <div className="border-solid border-2 w-10/12 m-4 p-4 m-auto">
      <h2 className="text-lg text-gray-800" id='reviews'>Ratings & Reviews</h2>
      <div className="flex justify-between">
        <RatingSummary metaData={sampleReviewMeta} />
        <ReviewList reviews={sampleReviews.results} />
      </div>
    </div>
  );
};

export default RatingsAndReviews;