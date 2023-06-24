import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const { useState, useEffect } = React;

const ReviewList = ({reviews}) => {
  const [count, setCount] = useState(2);
  const [renderedReviews, setRenderedReviews] = useState([]);

  const setReviews = () => {
    let result = [];
    for (let i = 0; i < count; i++) {
      if (reviews[i]) {
        result.push(reviews[i]);
      } else {
        break;
      }
    }
    setRenderedReviews(result);
  };

  useEffect(() => {
    setReviews();
  }, [count]);

  return (
    <div>
      <h2>Review List</h2>
      {renderedReviews.map((review) => {
        return <ReviewTile review={review} key={review.review_id} />
      })}
      {renderedReviews < reviews ? <button
        onClick={() => { setCount(count + 2); }}
        type='button'
      >More Reviews</button> : ''}
    </div>
  );
};

export default ReviewList;