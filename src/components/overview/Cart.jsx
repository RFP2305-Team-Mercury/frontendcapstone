import React from 'react';

export default function Cart() {

return (
  <div>
    <select name="size">
      <option value="">--Select Size--</option>
    </select>
    <select name="quantity">
      <option value="">--Select Quantity--</option>
    </select>
    <button>Add to Cart</button>
    <button>Outfit Check</button>
  </div>
)
};