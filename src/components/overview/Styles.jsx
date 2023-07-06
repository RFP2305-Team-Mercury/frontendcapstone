import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStyles } from "../../apis/product.js";
import Cart from "./Cart.jsx";
import { CircleCheck } from "../../utils/icons.jsx";
import { CircleCheck } from "../../utils/icons.jsx";

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
      <h2 className="text-lg text-gray-800 mx-4">Style - {selected.name}</h2>
      <div className="grid grid-cols-4 max-w-md">
        {styles.map((style) => {
          if (style === selected) {
            return (
              <>
                <div className="relative">
                  <img
                    data-testid="style-selected"
                    src={style.photos[0].thumbnail_url}
                    alt={style.name}
                    key={style.style_id}
                    onClick={() => handleSelect(style.style_id)}
                    className="w-16 h-16 rounded-full mx-2 mt-2 object-cover border-2 border-black z-0"
                  />
                  <span className="absolute top-1 right-1 w-16 h-16 z-1 justify-center">
                    <svg
                      className="w-5 h-5 rounded-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      strokeWidth="1"
                      stroke="black"
                      fill="white"
                      strokeWidth="1"
                      stroke="black"
                    >
                      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z"/>
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
              />
            );
          }
        })}
      </div>
      <Cart />
    </>
  );
}
