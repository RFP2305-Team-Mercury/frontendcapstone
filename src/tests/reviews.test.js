import React from "react";
import ReactDom from 'react-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import {Provider} from 'react-redux';
import store from '../redux/store.js';
import "@testing-library/jest-dom";

import RatingsAndReviews from '../components/ratingsAndReviews/RatingsAndReviews.jsx';
import RatingSummary from '../components/ratingsAndReviews/RatingSummary.jsx';
import getMetrics from '../components/ratingsAndReviews/getMetrics.js';
import ReviewBreakdown from '../components/ratingsAndReviews/ReviewBreakdown.jsx';
import ProductBreakdown from '../components/ratingsAndReviews/ProductBreakdown.jsx';
import ReviewList from '../components/ratingsAndReviews/ReviewList.jsx';
import ReviewTile from '../components/ratingsAndReviews/ReviewTile.jsx';
import NewReviewModal from '../components/ratingsAndReviews/NewReviewModal.jsx';
import FormCharacteristics from '../components/ratingsAndReviews/FormCharacteristics.jsx';

describe(RatingsAndReviews, () => {
  test("Ratings and Reviews renders to the page", () => {
    render(
      <Provider store={store}>
        <RatingsAndReviews />
      </Provider>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Ratings & Reviews');
  })
});

describe(RatingSummary, () => {
  const exampleMetaData = {
    "product_id": "40346",
    "ratings": {
        "1": "25",
        "2": "54",
        "3": "53",
        "4": "42",
        "5": "94"
    },
    "recommended": {
        "false": "70",
        "true": "198"
    },
    "characteristics": {
        "Fit": {
            "id": 135224,
            "value": "2.8423645320197044"
        },
        "Length": {
            "id": 135225,
            "value": "3.1219512195121951"
        },
        "Comfort": {
            "id": 135226,
            "value": "3.0000000000000000"
        },
        "Quality": {
            "id": 135227,
            "value": "3.3830845771144279"
        }
    }
  };
  test("Calculate Metrics Correctly", () => {
    const exampleResult = getMetrics(exampleMetaData);
    expect(exampleResult.calcCount).toEqual(268);
    expect(exampleResult.calcAvg).toEqual('3.50');
    expect(exampleResult.calcRecPct).toEqual('0.739');
  })

  test("loads average rating", () => {
    render(
      <RatingSummary metaData={exampleMetaData} filters={[]} />
    )
    const summaryRating = screen.getByTestId("summary-average");
    expect(summaryRating).toBeInTheDocument();
  });

  test("Load Review Breakdown", () => {
    const exampleResult = getMetrics(exampleMetaData);
    render(<ReviewBreakdown ratings={exampleMetaData.ratings} count={exampleResult.calcCount} filters={[]} />)
    const ratingBars = screen.getAllByText(/Stars/);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(ratingBars.length).toEqual(5);
  })

  test("Load Filters to Review Breakdown", () => {
    const exampleResult = getMetrics(exampleMetaData);
    render(<ReviewBreakdown ratings={exampleMetaData.ratings} count={exampleResult.calcCount} filters={[3, 5]} />)

    const filteredElement = screen.getByText(/Filtered/);
    const resetButton = screen.getByText('Reset');
    expect(filteredElement).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  })

  test('Handle Clicks to all Star Bars in Review Breakdown', async () => {
    const exampleResult = getMetrics(exampleMetaData);
    let testClicked = [];
    const testFn = (filter) => {
      testClicked.push(filter);
    }
    render(<ReviewBreakdown ratings={exampleMetaData.ratings} count={exampleResult.calcCount} filters={[]} handleChangeFilters={testFn} />)

    const fiveStar = screen.getByText('5 Stars');
    const fourStar = screen.getByText('4 Stars');
    const threeStar = screen.getByText('3 Stars');
    const twoStar = screen.getByText('2 Stars');
    const oneStar = screen.getByText('1 Stars');

    await fireEvent.click(fiveStar);
    await fireEvent.click(fourStar);
    await fireEvent.click(threeStar);
    await fireEvent.click(twoStar);
    await fireEvent.click(oneStar);

    expect(testClicked).toEqual([5, 4, 3, 2, 1]);
  })

  test('Handle Reset Click in Review Breakdown', async () => {
    const exampleResult = getMetrics(exampleMetaData);
    let testClicked = false;
    const testFn = () => {
      testClicked = true;
    }
    render(<ReviewBreakdown ratings={exampleMetaData.ratings} count={exampleResult.calcCount} filters={[5]} handleChangeFilters={testFn} />)

    const button = screen.getByText('Reset');
    await fireEvent.click(button);

    expect(testClicked).toEqual(true);
  })
});

describe(ReviewList, () => {
  test('Render Review List', () => {
    render(
      <Provider store={store}>
        <ReviewList reviews={[]} sortOption={'relevant'} filters={[]} />
      </Provider>
    )
    const reviewList = screen.getByText(/Reviews/);
    expect(reviewList).toBeInTheDocument();
  })
});

describe(ReviewTile, () => {
  const exampleReview = {
    "review_id": 1280250,
    "rating": 3,
    "summary": "I loved it",
    "recommend": true,
    "response": null,
    "body": "this is a great onesie",
    "date": "2023-07-03T00:00:00.000Z",
    "reviewer_name": "onesielover",
    "helpfulness": 0,
    "photos": []
  }

  test("Render Individual Review Tile", () => {
    render(<ReviewTile review={exampleReview} />)
    const reviewTitle = screen.getByText("I loved it");
    expect(reviewTitle).toBeInTheDocument();
  })

  test("Helpfulness Button should Increment", async () => {
    render(<ReviewTile review={exampleReview} />)
    const button = screen.getByText('Yes');
    expect(screen.getByTestId('helpful-count')).toHaveTextContent('0');
    await fireEvent.click(button);
    expect(screen.getByTestId('helpful-count')).toHaveTextContent('1');
    await fireEvent.click(button);
    expect(screen.getByTestId('helpful-count')).toHaveTextContent('0');
  })
})

describe(NewReviewModal, () => {
  test("Render New Review Modal", () => {
    let closed = false;
    let closedFn = () => { closed = true };
    render(<div id="portal"></div>)
    render(
      <Provider store={store}>
        <NewReviewModal onClose={closedFn} />
      </Provider>
    )
    const newReviewModal = screen.getByText('Write Your Review');
    expect(newReviewModal).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('Discard')).toBeInTheDocument();
  })
  test("Submit Button", async () => {
    let closed = false;
    let closedFn = () => { closed = true };
    render(<div id="portal"></div>)
    render(
      <Provider store={store}>
        <NewReviewModal onClose={closedFn} />
      </Provider>
    )
    const button = screen.getByText('Discard');
    await fireEvent.click(button);
  })
});

describe(FormCharacteristics, () => {
  test("Render any characteristic", async () => {
    await render(<FormCharacteristics characteristic={'Size'} />)
    expect(screen.getByText('Size')).toBeInTheDocument();
    await render(<FormCharacteristics characteristic={'Width'} />)
    expect(screen.getByText('Width')).toBeInTheDocument();
    await render(<FormCharacteristics characteristic={'Comfort'} />)
    expect(screen.getByText('Comfort')).toBeInTheDocument();
    await render(<FormCharacteristics characteristic={'Quality'} />)
    expect(screen.getByText('Quality')).toBeInTheDocument();
    await render(<FormCharacteristics characteristic={'Length'} />)
    expect(screen.getByText('Length')).toBeInTheDocument();
    await render(<FormCharacteristics characteristic={'Fit'} />)
    expect(screen.getByText('Fit')).toBeInTheDocument();
  })

  test("Render all rating options", () => {
    render(<FormCharacteristics characteristic={'Size'} />)
    expect(screen.getAllByRole('radio').length).toEqual(5);
  })
});