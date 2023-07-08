import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStyles } from "../../apis/product.js";
import Cart from "./Cart.jsx";

export default function Styles() {
  const productId = useSelector((state) => state.productId);
  const styles = useSelector((state) => state.styles);
  const selected = useSelector((state) => state.selected);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const data = await getStyles(productId);
      dispatch({ type: "SET_STYLES", payload: data });
      dispatch({ type: "SET_SELECTED", payload: data[0] });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  const handleSelect = (id) => {
    for (var i = 0; i < styles.length; i++) {
      if (styles[i]["style_id"] === id) {
        dispatch({ type: "SET_SELECTED", payload: styles[i] });
      }
    }
  };

  return (
    <>
      <h2 className="text-lg text-gray-800 mx-4 dark:text-white"><span className="font-bold dark:text-white">Style > </span>{selected.name}</h2>
      <div className="grid grid-cols-4 max-w-md dark:text-white" key="349283402">
        {styles.map((style) => {
          if (style === selected) {
            return (
              <>
                <div className="relative flex items-center" key="23982123">
                  <img
                    data-testid="style-selected"
                    src={style.photos[0].thumbnail_url}
                    alt={style.name}
                    key={style.style_id}
                    onClick={() => handleSelect(style.style_id)}
                    className="w-16 h-16 rounded-full mx-2 mt-2 object-cover border-2 border-gray-300 z-0"
                    alt="Thumbnail Selected Product Style"
                  />
                  <span className="absolute top-1 right-1 flex items-center justify-center w-8 h-8 z-10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="black"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </div>
              </>
            );
          } else {
            return (
              <img
                src={style.photos[0].thumbnail_url}
                alt={style.name}
                key={style.style_id}
                data-testid="style-image"
                data-testid="style-image"
                onClick={() => handleSelect(style.style_id)}
                className="w-16 h-16 rounded-full mt-2 mx-2 object-cover"
                alt="Thumbnail Product Styles"
              />
            );
          }
        })}
      </div>
      <Cart />
    </>
  );
}
