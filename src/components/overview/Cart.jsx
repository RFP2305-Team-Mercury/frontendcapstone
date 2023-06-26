import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, getCart } from "../../apis/cart.js";

export default function Cart({ selected }) {
  const [quantityChoice, setQuantityChoice] = useState([]);
  const [sku, setSku] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleSize = (e) => {
    setQuantityChoice([]);
    let value = e.target.value;
    let skus = Object.values(selected.skus);
    for (var i = 0; i < skus.length; i++) {
      if (skus[i]["size"] === value) {
        setSku([i]);
        skus[i]["quantity"] > 15
          ? generateQuantity(15)
          : generateQuantity(skus[i]["quantity"]);
      }
    }
  };

  const handleCart = () => {
    let sku_id = Object.keys(selected["skus"])[sku];
    const postData = async () => {
      try {
        console.log("post attempt");
        const data = await addCart(sku_id, quantity);
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
      {selected && <h1>{selected.name}</h1>}
      <select
        name="size"
        onChange={handleSize}
        className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow m-4 p-4"
      >
        <option key="0">--Select Size--</option>
        {selected &&
          Object.values(selected.skus).map((sku) => (
            <option key={sku.sku_id}>{sku.size}</option>
          ))}
      </select>
      <select
        name="quantity"
        onChange={(e) => setQuantity(e.target.value)}
        className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow m-4 p-4"
      >
        {!sku ? (
          <option key="default">-</option>
        ) : (
          <option key="defaultsize">1</option>
        )}
        {quantityChoice.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {!sku && (
        <button className="bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4">
          Please Select a Size
        </button>
      )}
      {sku && (
        <button
          onClick={handleCart}
          className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4"
        >
          Add to Cart      {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      )}

      <button
        onClick={handleOutfit}
        className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow m-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      </button>
    </div>
  );
}
