import React from 'react';

const ReviewTile = ({review}) => {
  return (
    <div>
      <h3>Review Tile</h3>
      <p>Summary: {review.summary}</p>
      <p>Body: {review.body}</p>
      <p>By: {review.reviewer_name}</p>
    </div>
  );
};

export default ReviewTile;