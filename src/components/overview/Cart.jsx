import React from 'react';

export default function Cart() {

return (
  <div>
    <select name="size">
      <option value="">--Select Size--</option>
    </select>
    <select name="quantity" >
      <option value="">--Select Quantity--</option>
    </select>
    <button>Add to Cart</button>
    <button>Outfit Check</button>
  </div>
)
};

//40347
// pass on find style_id object from select styles
// to get size, get skus.quantity
// to get size, get skus.size
// need sku_id to add to cart
// onSelect={handleSelect}