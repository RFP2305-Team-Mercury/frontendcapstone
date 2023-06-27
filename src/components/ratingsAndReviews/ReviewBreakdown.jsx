import React from 'react';

const ReviewBreakdown = ({ratings, count}) => {
  const getRatingBar = (pct) => {
    return (
      <div className="relative p-1">
        <div className="overflow-hidden h-2 text-xs flex rounded-none bg-gray-200">
          <div style={{ width: `${pct * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
        </div>
      </div>
    );
  };

  return (
    <table className="table-auto">
      <tbody>
        <tr>
          <td className="underline w-3/12">5 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['5'] / count)}</td>
        </tr>
        <tr>
          <td className="underline w-3/12">4 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['4'] / count)}</td>
        </tr>
        <tr>
          <td className="underline w-3/12">3 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['3'] / count)}</td>
        </tr>
        <tr>
          <td className="underline w-3/12">2 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['2'] / count)}</td>
        </tr>
        <tr>
          <td className="underline w-3/12">1 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['1'] / count)}</td>
        </tr>
      </tbody>
    </table>
  )
};

export default ReviewBreakdown;