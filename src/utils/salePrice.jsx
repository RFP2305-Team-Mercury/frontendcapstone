import React from 'react';

export const salePrice = (price) => {
  return (
    <span className="line-through text-red-500">{price}</span>
  );
};
