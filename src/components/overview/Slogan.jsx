import React, { useEffect, useState } from "react";
import Styles from "./Styles.jsx";
import StarRatings from "react-star-ratings";
import salePrice from "../../utils/salePrice.jsx";

import { useSelector, useDispatch } from "react-redux";
import { getOne } from "../../apis/product.js";

export default function Slogan() {
  const productId = useSelector((state) => state.productId);
  const selected = useSelector((state) => state.selected);
  const details = useSelector((state) => state.details);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(Object.values(details["features"]));
  }, [productId]);

  return (
    <>
      <div className="flex-2 w-2/3 mt-4 mb-4 border-r-2 border-black">
        <h2
          className="text-lg text-gray-800 mx-10 font-bold"
          data-testid="slogan-test"
        >
          {details.slogan}
        </h2>
        <p
          className="text-md text-gray-800 my-2 mx-10"
          data-testid="description-test"
        >
          {details.description}
        </p>
        <p className="text-md text-gray-800 my-2 mx-10 underline">
          {" "}
          Share on Social:{" "}
        </p>
        <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded ml-10 mr-2 mb-2">
          <a href="https://facebook.com/">
            <svg
              className="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </button>
        <button className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded mx-2 mb-2">
          <a href="https://twitter.com/intent/tweet">
            <svg
              className="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </button>
        <button className="bg-pink-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded mx-2">
          <a href="https://www.pinterest.com/pin-builder/">
            <svg
              className="w-5 h-5 fill-current"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
            </svg>
          </a>
        </button>
      </div>
      <div className="flex-1 w-1/3 mx-8 mt-4">
        <ul className="list-none" data-testid="features-test">
          {features.length > 0 &&
            features.map((feature) => (
              <li key={feature["value"]}>
                <span className="mr-2">✓</span>
                {feature["feature"]}: {feature["value"]}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
