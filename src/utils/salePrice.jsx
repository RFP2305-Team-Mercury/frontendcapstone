import React from 'react';

export default function salePrice (price) {
  return (
    <span className="line-through text-red-500">{price}</span>
  );
};
