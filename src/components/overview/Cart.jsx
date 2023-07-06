import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, getCart } from "../../apis/cart.js";

export default function Cart() {
  const productId = useSelector((state) => state.productId);
  const selected = useSelector((state) => state.selected);
  const [quantityChoice, setQuantityChoice] = useState([]);
  const [sku, setSku] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleSize = (e) => {
    setQuantityChoice([]);
    let skus = Object.values(selected["skus"]);
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
      <div className="flex">
        <select
          name="size"
          key="123456789"
          data-testid="size-test"
          onChange={handleSize}
          className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow m-4 p-4 w-44"
        >
          <option key="12344592810">--Select Size--</option>
          {selected &&
            Object.values(selected.skus).map((sku) => (
              <option key={sku.sku_id} value={sku.size}>
                {sku.size}
              </option>
            ))}
        </select>

        <select
          name="quantity"
          key="2390812301"
          data-testid="quantity-test"
          onChange={(e) => setQuantity(e.target.value)}
          className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow ml-7 m-4 p-4 w-24"
        >
          {!sku ? <option key="100">-</option> : <option key="101">1</option>}
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
            className="bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4 w-80"
            data-testid="select-size"
          >
            Please Select a Size
          </button>
        )}
        {sku &&
          (quantity > 0 ? (
            <button
              onClick={handleCart}
              data-testid="add-cart"
              className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4 w-80"
            >
              {" "}
              Add to Bag{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-[170px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          ) : (
            <button
              data-testid="out-of-stock"
              className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4 w-80"
            >
              OUT OF STOCK
            </button>
          ))}
      </div>
    </div>
  );
}
