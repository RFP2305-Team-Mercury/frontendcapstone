import React from 'react';
import { format, parseISO } from 'date-fns';
import StarRatings from 'react-star-ratings';
import api from '../../apis/reviews.js';

const { useState, useEffect } = React;

const ReviewTile = ({review}) => {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(0);
  const [requestSent, setRequestSent] = useState(false);
  const formattedDate = format(parseISO(review.date), 'MMMM dd, yyyy');

  useEffect(() => {
    setHelpfulCount(review.helpfulness);
  }, []);

  const handleHelpfulClick = () => {
    if (!requestSent) {
      // api.markHelpful(review.review_id); // Not working
      setRequestSent(true);
    }
    if (!helpfulClicked) {
      setHelpfulClicked(!helpfulClicked);
      let newCount = helpfulCount + 1;
      setHelpfulCount(newCount);
      return;
    }
    if (helpfulClicked) {
      setHelpfulClicked(!helpfulClicked);
      let newCount = helpfulCount - 1;
      setHelpfulCount(newCount);
      return;
    }
  };



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
        <p className="text-lg text-gray-800 font-bold break-words hyphens-auto capitalize">{review.summary}</p>
        <p className="hyphens-auto">{review.body}</p>
      </div>
      {review.photos.length ? review.photos.map((photo) => {
        return <img className="shadow-md object-cover h-32 w-24 inline m-2" key={photo.id} src={photo.url} />
      }) : ''}
      {review.recommend ? <div>&#10003; I recommend this product</div> : ""}
      <div className="font-light text-gray-600 py-2">
        <span className="mr-1">Helpful?
          <span className="underline mx-2 cursor-pointer" onClick={handleHelpfulClick}>Yes</span>
          <span>({helpfulCount})</span>
        </span>
          <span className="mx-4 text-xl font-thin">|</span>
          <span className="underline">Report</span>
      </div>
    </div>
  );
};

export default ReviewTile;