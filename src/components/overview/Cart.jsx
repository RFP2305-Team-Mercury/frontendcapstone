import React from 'react';

export default function Cart() {

const handleSelect = () => {
  //update state for select_quantiy or select_size
}

const handleCart = () => {
  //if default select size -> open the size dropdown with message "please select size
  //find matching sku from style_id, quantity, and size selected (stored ins tate)
  //complete post request to Cart API
    // POST /cart
    // sku_id params
    // if already in cart, add one
    // reduce sku quantity by 1
  //update state with new cart
    // GET /cart
}

const handleOutfit = () => {
  //console.log("selected: " e.target.value);
}

return (
  <div>
    <select name="size"onSelect={handleSelect}>
      <option value="" >--Select Size--</option>
      {/* find skus and return options for size
          if quantity === 0 for all skus, return "out of stock"
          when collapsed show selected size
      */}
    </select>
    <select name="quantity"onSelect={handleSelect} >
      <option value="">-</option>
      {/* find skus and return list of 1 -> maximum (from api or 15)
          if quantity === 0 for all skus, return "out of stock"
          when size is selected, quantity should default to 1
          before size is selected, quantity should be -
      */}
    </select>
    <button onClick={handleCart}>Add to Cart</button>
    {/* if no stock, hide button */}
    <button onClick={handleOutfit}>Outfit Check</button>
  </div>
)
};

//40347
// pass on find style_id object from select styles
// to get size, get skus.quantity
// to get size, get skus.size
// need sku_id to add to cart
// onSelect={handleSelect}