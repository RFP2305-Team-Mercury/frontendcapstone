import React from 'react';

const { useState, useEffect } = React;

const RatingSummary = ({metaData}) => {
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
    let calcRecPct = (Number(metaData.recommended.true) / (Number(metaData.recommended.true) + Number(metaData.recommended.false))).toPrecision(3);

    let result = {calcCount, calcAvg, calcRecPct};
    return result;
  };

  const getRatingBar = (pct) => {
    return (
      <div className="relative p-1">
        <div className="overflow-hidden h-2 text-xs flex rounded-none bg-gray-200">
          <div style={{ width: `${pct * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    let metrics = getMetrics();
    setCount(metrics.calcCount);
    setAverage(metrics.calcAvg);
    setRecPct(metrics.calcRecPct)
  }, []);

  return (
    <div className="w-4/12 flex flex-col">
      <div className="text-5xl font-bold my-4">
        {average}
      </div>
      <div className="my-2">
        {recPct * 100}% of reviews recommend this product
      </div>
      <table className="table-auto">
        <tbody>
          <tr>
            <td className="underline w-3/12">5 Stars</td>
            <td className="w-9/12">{getRatingBar(metaData.ratings['5'] / count)}</td>
          </tr>
          <tr>
            <td className="underline w-3/12">4 Stars</td>
            <td className="w-9/12">{getRatingBar(metaData.ratings['4'] / count)}</td>
          </tr>
          <tr>
            <td className="underline w-3/12">3 Stars</td>
            <td className="w-9/12">{getRatingBar(metaData.ratings['3'] / count)}</td>
          </tr>
          <tr>
            <td className="underline w-3/12">2 Stars</td>
            <td className="w-9/12">{getRatingBar(metaData.ratings['2'] / count)}</td>
          </tr>
          <tr>
            <td className="underline w-3/12">1 Stars</td>
            <td className="w-9/12">{getRatingBar(metaData.ratings['1'] / count)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RatingSummary;