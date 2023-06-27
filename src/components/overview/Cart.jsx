import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, getCart } from "../../apis/cart.js";

export default function Cart({ selected }) {
  const outfits = useSelector((state) => state.outfits);
  const productId = useSelector((state) => state.productId);
  const [quantityChoice, setQuantityChoice] = useState([]);
  const [sku, setSku] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const handleSize = (e) => {
    setQuantityChoice([]);
    let skus = Object.values(selected.skus);
    for (var i = 0; i < skus.length; i++) {
      if (skus[i]["size"] === e.target.value) {
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
        console.log("adding to cart");
        const data = await addCart(sku_id, quantity);
      } catch (error) {
        console.error(error);
      }
    };
    postData();
    //can probably delete this?
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
    setFavoriate(!favorite);
    favorite
      ? dispatch({ type: "ADD_ITEM", payload: productId })
      : dispatch({ type: "REMOVE_ITEM", payload: productId });
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
      <div className="flex">
        <select
          name="size"
          data-testid="size-test"
          onChange={handleSize}
          className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow m-4 p-4 w-44"
        >
          <option key="0">--Select Size--</option>
          {selected &&
            Object.values(selected.skus).map((sku) => (
              <option key={sku.sku_id}>{sku.size}</option>
            ))}
        </select>
        <select
          name="quantity"
          data-testid="quantity-test"
          onChange={(e) => setQuantity(e.target.value)}
          className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow ml-7 m-4 p-4 w-24"
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
      </div>
      <div className="flex">
        {!sku && (
          <button
            className="bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4 w-60"
            data-testid="select-size"
          >
            Please Select a Size
          </button>
        )}
        {sku && (
          <button
            onClick={handleCart}
            data-testid="add-cart"
            className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4 w-60"
          >
            {" "}
            Add to Cart{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-[95px]"
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
          className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow ml-1 m-4"
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
    </div>
  );
}
