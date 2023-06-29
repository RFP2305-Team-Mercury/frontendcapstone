import React from 'react';

const ReviewBreakdown = ({ratings, count, filters, handleChangeFilters}) => {
  const getRatingBar = (pct) => {
    return (
      <div className="relative p-1">
        <div className="overflow-hidden h-2 text-xs flex rounded-none bg-gray-200">
          <div style={{ width: `${pct * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
        </div>
      </div>
    );
  };

  const handleFilterClick = (newFilter) => {
    handleChangeFilters(newFilter);
  };

  return (
    <table className="table-auto mt-2 mb-4">
      <tbody>
        <tr className="hover:bg-green-100" onClick={() => {handleFilterClick('five')}}>
          <td className="underline w-3/12">5 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['5'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100" onClick={() => {handleFilterClick('four')}}>
          <td className="underline w-3/12">4 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['4'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100" onClick={() => {handleFilterClick('three')}}>
          <td className="underline w-3/12">3 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['3'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100" onClick={() => {handleFilterClick('two')}}>
          <td className="underline w-3/12">2 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['2'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100" onClick={() => {handleFilterClick('one')}}>
          <td className="underline w-3/12">1 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['1'] / count)}</td>
        </tr>
      </tbody>
    </table>
  )
};

export default ReviewBreakdown;