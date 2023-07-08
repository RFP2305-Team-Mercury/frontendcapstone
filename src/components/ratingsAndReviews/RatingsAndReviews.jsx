import React from 'react';
import {useSelector} from 'react-redux'
import ReviewList from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';
import api from '../../apis/reviews.js';

const { useState, useEffect } = React;

const RatingsAndReviews = () => {
  const [reviews, setReviews] = useState();
  const [metaData, setMetaData] = useState();
  const [sortOption, setSortOption] = useState('relevant');
  const [filters, setFilters] = useState([]);
  let productId = useSelector(state=>state.productId);

  const handleGetReviews = async (reviewsSortOption) => {
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
        sort: reviewsSortOption,
        product_id: productId
      };
      let reviewResult = await api.getReviews(reviewParams);
      setReviews(reviewResult);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeSort = (option) => {
    setSortOption(option);
    handleGetReviews(option);
  };

  const handleChangeFilters = (newFilter, reset) => {
    let sortFn = function(a, b) {
      return b - a;
    };

    if (reset) {
      setFilters([]);
      return;
    }
    if (!filters.includes(newFilter)) {
      let sorted = [...filters, newFilter].sort(sortFn);
      setFilters(sorted);
      return;
    } else {
      let toKeep = [];
      for (let filter of filters) {
        if (filter !== newFilter) {
          toKeep.push(filter)
        }
      }
      let sorted = toKeep.sort(sortFn);
      setFilters(sorted);
    }
  }

  useEffect(() => {
    handleGetReviews();
  }, [productId]);

  return useSelector(state=>state.loadingFirst)? '' :  (
    <div className="w-10/12 m-4 p-4 m-auto dark:bg-gray-600 dark:text-gray-100">
      <h2 className="text-lg text-gray-800 dark:text-gray-200" id='reviews'>Ratings & Reviews</h2>
      <div className="flex justify-between">
        {metaData ? <RatingSummary metaData={metaData} filters={filters} handleChangeFilters={handleChangeFilters} /> : ''}
        {reviews ? <ReviewList reviews={reviews} sortOption={sortOption} handleChangeSort={handleChangeSort} filters={filters} /> : ''}
      </div>
    </div>
  );
};

export default RatingsAndReviews;