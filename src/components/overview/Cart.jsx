import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStyles } from "../../apis/product.js";

export default function Cart() {
  const productId = useSelector((state) => state.productId);
  const styles = useSelector((state) => state.styles);
  const dispatch = useDispatch();
  const [style, setStyle] = useState("");
  const [quantity, setQuantity] = useState([]);

  const handleSize = (e) => {
    setQuantity([]);
    let value = e.target.value;
    let skus = Object.values(styles[0].skus);
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
  useEffect(() => {
    // This callback will be triggered whenever the `styles` state changes
    if (styles.length > 0) {
      console.log("Style SKUs:", styles[0]["skus"]);
    }
  }, [styles]);

  function generateQuantity(max) {
    const result = [];
    for (let i = 1; i <= max; i++) {
      result.push(i);
    }
    setQuantity(result);
  }

  return (
    <div>
      <h1>{style.name}</h1>
      <select name="size" onChange={handleSize}>
        <option value="">--Select Size--</option>
        {styles.length > 0 &&
          Object.values(styles[0].skus).map((sku) => (
            <option key={sku.sku_id}>
              {sku.size}
            </option>
          ))}
      </select>
      <select name="quantity" onChange={handleQuantity}>
        <option value="">-</option>
        {quantity.map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <button onClick={handleCart}>Add to Cart</button>
      <button onClick={handleOutfit}>Outfit Check</button>
    </div>
  );
}

//40347
// pass on find style_id object from select styles
// need sku_id to add to cart
