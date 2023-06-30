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
    } catch (error) {
      console.error(error);
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
      <h2 className="text-lg text-gray-800 mx-4">Style - {selected.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {styles.map((style) => {
          if (style === selected) {
            return (
              <>
                <div className="relative">
                  <img
                    src={style.photos[0].thumbnail_url}
                    alt={style.name}
                    key={style.style_id}
                    onClick={() => handleSelect(style.style_id)}
                    className="w-16 h-16 rounded-full border-4 border-black mx-4 mt-2"
                  />
                  <span className="absolute top-0 right-0 m-2 flex items-center justify-center rounded-full w-6 h-6">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.061 13.528l-4.279-4.28-1.414 1.414 5.693 5.693 11.312-11.313-1.414-1.414z"
                        clipRule="evenodd"
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
                onClick={() => handleSelect(style.style_id)}
                className="w-16 h-16 rounded-full mt-2 mx-4"
              />
            );
          }
        })}
      </div>
      <Cart />
    </>
  );
}
