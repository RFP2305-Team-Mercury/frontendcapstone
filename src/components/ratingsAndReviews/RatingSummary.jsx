import React from 'react';
import StarRatings from 'react-star-ratings';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const { useState, useEffect } = React;

const RatingSummary = ({metaData, filters, handleChangeFilters}) => {
  const [count, setCount] = useState(0);
  const [average, setAverage] = useState(0);
  const [recPct, setRecPct] = useState(0);

  const getMetrics = () => {
    let calcCount = 0;
    let total = 0;
    for (let i = 1; i < 6; i++) {
      let newCount = metaData.ratings[i];
      calcCount += Number(newCount);
      total += (Number(newCount) * i);
    }
    let calcAvg = (total / calcCount).toPrecision(2);
    calcAvg = (Math.round(calcAvg * 4) / 4).toPrecision(3)
    let calcRecPct = (Number(metaData.recommended.true) / (Number(metaData.recommended.true) + Number(metaData.recommended.false))).toPrecision(3);

    let result = {calcCount, calcAvg, calcRecPct};
    return result;
  };

  useEffect(() => {
    let metrics = getMetrics();
    setCount(metrics.calcCount);
    setAverage(metrics.calcAvg);
    setRecPct(metrics.calcRecPct)
  }, []);

  return (
    <div className="w-4/12 flex flex-col">
      <div className="text-5xl font-bold my-4 flex flex-row place-items-start">
        {average}
        <div className="relative -top-[16px] left-2" data-testid="summary-average">
          {average ? <StarRatings
            rating={Number(average)}
            numberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
          /> : ''}
        </div>
      </div>
      <div className="my-2">
        {recPct * 100}% of reviews recommend this product
      </div>
      <ReviewBreakdown ratings={metaData.ratings} count={count} filters={filters} handleChangeFilters={handleChangeFilters} />
      <ProductBreakdown characteristics={metaData.characteristics} />
    </div>
  );
};

export default RatingSummary;