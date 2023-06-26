import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStyles } from "../../apis/product.js";

export default function Cart({selected}) {
  const productId = useSelector((state) => state.productId);
  const styles = useSelector((state) => state.styles);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState([]);

  const handleSize = (e) => {
    setQuantity([]);
    let value = e.target.value;
    let skus = Object.values(selected.skus);
    for(var i=0; i < skus.length; i++){
      if(skus[i]['size'] === value){
        let max = skus[i]['quantity']
        if(max > 15){
          generateQuantity(15);
        } else {
          generateQuantity(max);
        }
      }
    }
  };

  const handleQuantity = (e) => {
    console.log(e.target.value)
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
  };

  const handleOutfit = () => {
    //console.log("selected: " e.target.value);
  };

  function generateQuantity(max) {
    const result = [];
    for (let i = 1; i <= max; i++) {
      result.push(i);
    }
    setQuantity(result);
  }

  return (
    <div>
      <h1>{selected.name}</h1>
      <select name="size" onChange={handleSize} className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow">
        <option value="">--Select Size--</option>
        {selected &&
          Object.values(selected.skus).map((sku) => (
            <option key={sku.sku_id}>
              {sku.size}
            </option>
          ))}
      </select>
      <select name="quantity" onChange={handleQuantity} className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow">
        <option value="">-</option>
        {quantity.map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <button onClick={handleCart} className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex">Add to Cart</button>
      <button onClick={handleOutfit}className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex">Outfit Check</button>
    </div>
  );
}

//40347
// pass on find style_id object from select styles
// need sku_id to add to cart
