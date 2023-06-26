import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, getCart } from "../../apis/cart.js";

export default function Cart({selected}) {
  const [quantityChoice, setQuantityChoice] = useState([]);
  const [sku, setSku] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleSize = (e) => {
    setQuantityChoice([]);
    let value = e.target.value;
    let skus = Object.values(selected.skus);
    for(var i=0; i < skus.length; i++){
      if(skus[i]['size'] === value){
        setSku([i]);
        skus[i]['quantity'] > 15 ? generateQuantity(15) : generateQuantity(skus[i]['quantity']); 
      }
    }
  };

  const handleCart = () => {
    let sku_id = Object.keys(selected['skus'])[sku];
    const postData = async () => {
      try {
        console.log('post attempt')
        const data = await addCart(sku_id,quantity);
      } catch (error) {
        console.error(error);
      }
    };
    postData();
    const fetchCart = async () => {
      try {
        const data = await getCart();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCart();
    // if already in cart, add one
    // reduce sku quantity by 1
  };

  const handleOutfit = () => {
    //console.log("selected: " e.target.value);
  };

  function generateQuantity(max) {
    const result = [];
    for (let i = 1; i <= max; i++) {
      result.push(i);
    }
    result.shift();
    setQuantityChoice(result);
  }

  return (
    <div>
      <h1>{selected.name}</h1>
      <select name="size" onChange={handleSize} className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow m-4 p-4">
        <option key='0'>--Select Size--</option>
        {selected &&
          Object.values(selected.skus).map((sku) => (
            <option key={sku.sku_id}>
              {sku.size}
            </option>
          ))}
      </select>
      <select name="quantity" onChange={(e) => setQuantity(e.target.value)} className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow m-4 p-4">
        {!sku ? <option key='default'>-</option> : <option key="defaultsize">1</option>}
        {quantityChoice.map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      {!sku && <button className="bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4">Please Select a Size</button>}
      {sku && <button onClick={handleCart} className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4">Add to Cart</button>}

      <button onClick={handleOutfit}className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4">Outfit Check</button>
    </div>
  );
}

