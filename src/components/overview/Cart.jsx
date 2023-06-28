import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, getCart } from "../../apis/cart.js";

export default function Cart({ selected }) {
  const outfits = useSelector((state) => state.outfits);
  const productId = useSelector((state) => state.productId);
  const [quantityChoice, setQuantityChoice] = useState([]);
  const [sku, setSku] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

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
    setFavorite(!favorite);
    console.log(favorite);
    favorite
      ? dispatch({ type: "ADD_OUTFIT_ITEM", payload: productId })
      : dispatch({ type: "REMOVE_OUTFIT_ITEM", payload: productId });
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
          data-testid="size-test"
          onChange={handleSize}
          className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow m-4 p-4 w-44"
        >
          <option key="1">--Select Size--</option>
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
            <option key="100">-</option>
          ) : (
            <option key="101">1</option>
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
          (quantity > 0) ?
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
          :
          <button
            data-testid="out-of-stock"
            className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow flex m-4 p-4 w-60">
            OUT OF STOCK
          </button>
        )}

        <button
          onClick={handleOutfit}
          className="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded-none shadow ml-1 m-4"
        >
          {favorite ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        :   <svg
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
          </svg>}
        </button>
      </div>
    </div>
  );
}
