import React from 'react';

const ReviewBreakdown = ({ratings, count, filters, handleChangeFilters}) => {
  const getRatingBar = (pct) => {
    return (
      <div className="relative p-1">
        <div className="overflow-hidden h-2 text-xs flex rounded-none bg-gray-200 dark:bg-gray-400">
          <div style={{ width: `${pct * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 dark:bg-green-600"></div>
        </div>
      </div>
    );
  };

  const getFilterElements = () => {
    let starElements = [];
    for (let i = 0; i < filters.length; i++) {
      if (filters.length === 1 || i === filters.length - 1) {
        starElements.push({
          filter: filters[i],
          text: ` ${filters[i]} Stars`
        })
      } else {
        starElements.push({
          filter: filters[i],
          text: `${filters[i]}, `
        })
      }
    }

    return (
      <thead>
        <tr>
          <th colSpan="2" className="text-base font-normal">
            <div className="px-4 flex justify-between">
              <div><span className="px-2">Filtered:</span>
                {starElements.map((element) => {
                  return <span className="font-light" key={element.filter}>{element.text}</span>
                })}</div>
              <div className="underline cursor-pointer" onClick={() => {handleChangeFilters(null, true)}}>Reset</div>
            </div>
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
        <tr className="hover:bg-green-100 cursor-pointer dark:hover:bg-green-900" onClick={() => {handleFilterClick(5)}}>
          <td className="underline w-[55px]">5 Stars</td>
          <td className="">{getRatingBar(ratings['5'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100 cursor-pointer dark:hover:bg-green-900" onClick={() => {handleFilterClick(4)}}>
          <td className="underline">4 Stars</td>
          <td className="">{getRatingBar(ratings['4'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100 cursor-pointer dark:hover:bg-green-900" onClick={() => {handleFilterClick(3)}}>
          <td className="underline">3 Stars</td>
          <td className="">{getRatingBar(ratings['3'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100 cursor-pointer dark:hover:bg-green-900" onClick={() => {handleFilterClick(2)}}>
          <td className="underline">2 Stars</td>
          <td className="">{getRatingBar(ratings['2'] / count)}</td>
        </tr>
        <tr className="hover:bg-green-100 cursor-pointer dark:hover:bg-green-900" onClick={() => {handleFilterClick(1)}}>
          <td className="underline">1 Stars</td>
          <td className="">{getRatingBar(ratings['1'] / count)}</td>
        </tr>
      </tbody>
    </table>
  )
};

export default ReviewBreakdown;