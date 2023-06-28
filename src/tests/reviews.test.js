import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {Provider} from 'react-redux';
import "@testing-library/jest-dom";

import RatingsAndReviews from '../components/ratingsAndReviews/RatingsAndReviews.jsx';
import RatingSummary from '../components/ratingsAndReviews/RatingSummary.jsx';
import sampleReviewMeta from '../components/ratingsAndReviews/sampleReviewMeta.js';

describe("RatingSummary component meets business requirements", () => {
  test("loads average rating", () => {
    render(
      <RatingSummary metaData={sampleReviewMeta} />
    )
    const summaryRating = screen.getByTestId("summary-average");
    expect(summaryRating).toBeInTheDocument();
  });
});

xdescribe("RatingSummary component meets business requirements", () => {
  test("test example", () => {
    //add test logic
  });
});