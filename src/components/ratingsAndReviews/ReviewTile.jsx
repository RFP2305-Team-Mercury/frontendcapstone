import React from 'react';
import { format, parseISO } from 'date-fns';
import StarRatings from 'react-star-ratings';

const ReviewTile = ({review}) => {
  let formattedDate = format(parseISO(review.date), 'MMMM dd, yyyy');

  return (
    <div className="border-b-2 border-gray-800 py-4 mb-4">
      <div className="flex justify-between">
        <span><StarRatings
            rating={Number(review.rating)}
            numberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
          /></span>
        <span className="font-thin">{review.reviewer_name}, {formattedDate}</span>
      </div>
      <div className="py-2">
        <p className="text-lg text-gray-800 font-bold">{review.summary}</p>
        <p>{review.body}</p>
      </div>
      {review.recommend ? <div>&#10003; I recommend this product</div> : ""}
      <div className="font-light text-gray-600 py-2">
        <span className="mr-1">Helpful?
          <span className="underline mx-2">Yes</span>
          <span>({review.helpfulness})</span>
        </span>
          <span className="mx-4 text-xl font-thin">|</span>
          <span className="underline">Report</span>
      </div>
    </div>
  );
};

export default ReviewTile;