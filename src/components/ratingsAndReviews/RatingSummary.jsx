import React from 'react';

const { useState, useEffect } = React;

const RatingSummary = ({metaData}) => {
  const [count, setCount] = useState(0);
  const [average, setAverage] = useState(0);

  const getMetrics = () => {
    let count = 0;
    let total = 0;
    for (let i = 1; i < 6; i++) {
      let newCount = metaData.ratings[i];
      count += Number(newCount);
      total += (Number(newCount) * i);
    }
    let average = total / count;
    let result = {count, average};
    return result;
  };

  useEffect(() => {
    let metrics = getMetrics();
    setCount(metrics.count);
    setAverage(metrics.average);
  }, [])

  return (
    <div className="w-4/12">
      <div>
        {average}
      </div>
    </div>
  );
};

export default RatingSummary;