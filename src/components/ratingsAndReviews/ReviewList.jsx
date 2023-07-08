import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, newReviewModal } from '../../redux/actions';

const { useState, useEffect } = React;

const ReviewList = ({reviews, sortOption, handleChangeSort, filters}) => {
  const [count, setCount] = useState(2);
  const [renderedReviews, setRenderedReviews] = useState([]);
  const dispatch = useDispatch();

  const setReviews = () => {
    let result = [];
    let filtered;
    if (filters.length > 0) {
      filtered = reviews.filter((review) => {
        return filters.includes(review.rating);
      })
    } else {
      filtered = reviews;
    }
    for (let i = 0; i < count; i++) {
      if (filtered[i]) {
        result.push(filtered[i]);
      } else {
        break;
      }
    }
    setRenderedReviews(result);
  };

  const handleAddReview = () => {
    dispatch(newReviewModal());
    dispatch(openModal());
  };

  useEffect(() => {
    setReviews();
  }, [count, filters]);

  useEffect(() => {
    setCount(2);
    setReviews();
  }, [reviews]);

  return (
    <div className="w-8/12 px-4">
      <div className="text-lg font-bold">
        {reviews.length} Reviews, sorted by
        <select
          className="underline dark:bg-gray-600"
          defaultValue={sortOption}
          onChange={async (event) => {
            handleChangeSort(event.target.value);
          }}
        >
          <option value="relevant">Relevant</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select>
      </div>
      <div className="overflow-auto px-4 max-h-[85vh] border-solid border-2 my-4 dark:border-gray-700">
        {renderedReviews.map((review) => {
          return <ReviewTile review={review} key={review.review_id} />
        })}
      </div>
      {renderedReviews.length < reviews.length ? <button
       alt="Add a Review"
        onClick={() => { setCount(count + 2); }}
        className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow mr-4 dark:bg-gray-500 dark:border-gray-400 dark:text-gray-100 dark:hover:bg-gray-800"
      >MORE REVIEWS</button> : ''}
      <button
       alt="Add a Review"
        onClick={handleAddReview}
        className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow dark:bg-gray-500 dark:border-gray-400 dark:text-gray-100 dark:hover:bg-gray-800"
      >ADD A REVIEW +</button>
    </div>
  );
};

export default ReviewList;