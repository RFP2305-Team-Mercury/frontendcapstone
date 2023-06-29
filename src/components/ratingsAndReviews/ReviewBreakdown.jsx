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

  const getFilterElements = () => {
    return (
      <thead>
        <tr>
          <th colSpan="2" className="text-base font-normal">
            Filtered:
            {filters.map((filter) => {
              return <span className="font-light" key={filter}> {filter}</span>
            })}
            <div className="underline cursor-pointer" onClick={() => {handleChangeFilters(null, true)}}>Reset</div>
          </th>
        </tr>
      </thead>
    );
  };

  const handleFilterClick = (newFilter) => {
    handleChangeFilters(newFilter);
  };

  return (
    <table className="table-auto mt-2 mb-4">
      {filters.length > 0 ? getFilterElements() : ''}
      <tbody>
        <tr className="hover:bg-green-100 cursor-pointer" onClick={() => {handleFilterClick('five')}}>
          <td className="underline w-3/12">5 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['5'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100 cursor-pointer" onClick={() => {handleFilterClick('four')}}>
          <td className="underline w-3/12">4 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['4'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100 cursor-pointer" onClick={() => {handleFilterClick('three')}}>
          <td className="underline w-3/12">3 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['3'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100 cursor-pointer" onClick={() => {handleFilterClick('two')}}>
          <td className="underline w-3/12">2 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['2'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100 cursor-pointer" onClick={() => {handleFilterClick('one')}}>
          <td className="underline w-3/12">1 Stars</td>
          <td className="w-9/12">{getRatingBar(ratings['1'] / count)}</td>
        </tr>
      </tbody>
    </table>
  )
};

export default ReviewBreakdown;