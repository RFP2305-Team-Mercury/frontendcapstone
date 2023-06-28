import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStyles } from "../../apis/product.js";
import Cart from "./Cart.jsx";

export default function Styles() {
  const productId = useSelector((state) => state.productId);
  const styles = useSelector((state) => state.styles);
  const selected = useSelector((state) => state.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStyles(productId);
        dispatch({ type: "SET_STYLES", payload: data });
        dispatch({ type: "SET_SELECTED", payload: data[0] }); // default to first style in the list
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSelect = (id) => {
    for (var i = 0; i < styles.length; i++) {
      if (styles[i]["style_id"] === id) {
        dispatch({ type: "SET_SELECTED", payload: styles[i] });
      }
    }
    console.log(selected['skus']);
  };

  return (
    <>
      <h2 className="text-lg text-gray-800 mx-4">Style - {selected.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {styles.map((style) => {
          if (style === selected) {
            // add conditional rendering to overlay with checkmark & title above thumbnails
            return (
              <img
                src={style.photos[0].thumbnail_url}
                alt={style.name}
                key={style.style_id}
                onClick={() => handleSelect(style.style_id)}
                className="w-16 h-16 rounded-full border-4 border-black mx-4 mt-2"
              />
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
      <Cart  />
    </>
  );
}
