import React from 'react';

const ProductBreakdown = ({characteristics}) => {
  let types = Object.keys(characteristics);

  return (
    <div>
      {types.map((type) => {
        let low, high;
        let rating = (((characteristics[type].value) / 5).toPrecision(2)) * 97; // 100% is too far right, 97% is a good max

        switch (type) {
          case 'Size':
            low = 'Too Small';
            high = 'Too Large';
            break;
          case 'Width':
            low = 'Too Narrow';
            high = 'Too Wide';
            break;
          case 'Comfort':
            low = 'Poor';
            high = 'Perfect';
            break;
          case 'Quality':
            low = 'Poor';
            high = 'Perfect';
            break;
          case 'Length':
            low = 'Runs Short';
            high = 'Runs Long';
            break;
          case 'Fit':
            low = 'Runs Tight';
            high = 'Runs Relaxed';
            break;
        };
        return (
          <div key={type} className="text-gray-700 font-light dark:text-gray-200">{type}
            <div className="relative p-1 flex justify-between">
              <div style={{width: '32%'}} className="h-2 pt-2 text-xs flex rounded-none bg-gray-200 dark:bg-gray-400"></div>
              <div style={{width: '32%'}} className="h-2 pt-2 text-xs flex rounded-none bg-gray-200 dark:bg-gray-400"></div>
              <div style={{width: '32%'}} className="h-2 pt-2 text-xs flex rounded-none bg-gray-200 dark:bg-gray-400"></div>
            </div>
            <div className="relative p-1 flex justify-between text-s text-gray-600 font-thin dark:text-gray-300">
              <div>{low}</div>
              <div>{high}</div>
            </div>
            <div className="flex text-green-500 translate-y-[-51px] dark:text-green-600"><div style={{width: `${rating}%`}} className="overflow-hidden whitespace-nowrap"></div><div>▼</div></div>
          </div>
        )
      })}
    </div>
  );
};

export default ProductBreakdown;