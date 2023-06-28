import React from 'react';
import {useSelector} from 'react-redux'
import ReviewList from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';
import api from '../../apis/reviews.js';

const { useState, useEffect } = React;

const RatingsAndReviews = () => {
  const [reviews, setReviews] = useState();
  const [metaData, setMetaData] = useState();
  let productId = useSelector(state=>state.productId);

  const handleGetReviews = async () => {
    try {
      let params = {
        product_id: productId
      }
      let response = await api.getReviews(params);
      if (reviews) {
        setReviews(...reviews, ...response);
        return;
      } else {
        setReviews(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetMetaData = async () => {
    try {
      let params = {
        product_id: productId
      }
      let result = await api.getMetaData(params);
      setMetaData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetReviews();
    handleGetMetaData();
  }, []);

  useEffect(() => {
    console.log('RATINGS AND REVIEWS');
    console.log('reviews:', reviews);
  }, [reviews])

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