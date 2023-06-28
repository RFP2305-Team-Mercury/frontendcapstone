import React from 'react';
import {useSelector} from 'react-redux'
import ReviewList from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';
import api from '../../apis/reviews.js';

const { useState, useEffect } = React;

const RatingsAndReviews = () => {
  const [reviews, setReviews] = useState();
  const [metaData, setMetaData] = useState();
  const [filter, setFilter] = useState('relevant');
  let productId = useSelector(state=>state.productId);

  const handleGetReviews = async () => {
    try {
      let metaParams = {
        product_id: productId
      }
      let metaResult = await api.getMetaData(metaParams);
      setMetaData(metaResult);
      let count = 0;
      for (let i = 1; i < 6; i++) {
        count += Number(metaResult.ratings[i]);
      }
      let reviewParams = {
        count: count,
        sort: filter,
        product_id: productId
      };
      let reviewResult = await api.getReviews(reviewParams);
      console.log(reviewResult);
      setReviews(reviewResult);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetReviews();
  }, [filter]);

  return (
    <div className="border-solid border-2 w-10/12 m-4 p-4 m-auto">
      <h2 className="text-lg text-gray-800" id='reviews'>Ratings & Reviews</h2>
      <div className="flex justify-between">
        {metaData ? <RatingSummary metaData={metaData} /> : ''}
        {reviews ? <ReviewList reviews={reviews} /> : ''}
      </div>
    </div>
  );
};

export default RatingsAndReviews;