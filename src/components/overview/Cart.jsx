import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getStyles } from '../../apis/product.js';

export default function Cart() {
  const productId = useSelector((state) => state.productId);
  const styles = useSelector((state) => state.styles);
  const dispatch = useDispatch();
  const [style, setStyle] = useState('');

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
    <h1>{style.name}</h1>
    <select name="size"onSelect={handleSelect}>
      <option value="" >--Select Size--</option>
      {/* {style.skus.map((sku) => {
        return (<option value={sku.sku_id}></option>)
      })} */}
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