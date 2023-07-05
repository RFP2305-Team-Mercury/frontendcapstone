import React, { useEffect, useState } from "react";
import Styles from "./Styles.jsx";
import StarRatings from "react-star-ratings";
import { salePrice } from "../../utils/salePrice.jsx";

import { useSelector, useDispatch } from "react-redux";
import { getOne } from "../../apis/product.js";

export default function Details() {
  const productId = useSelector((state) => state.productId);
  const selected = useSelector((state) => state.selected);
  const details = useSelector((state) => state.details);
  const [features, setFeatures] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const data = await getOne(productId);
      dispatch({ type: "SET_DETAILS", payload: data });
      setFeatures(Object.values(data["features"]));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  return (
    <>
      <div className="flex-1 w-1/3 z-0">
        <div className="mx-4">
          <StarRatings
            rating={3.5}
            numberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
            className="z-0"
          />
        </div>
        <h3 className="font-light text-gray-600 py-2 underline mx-4">
          <a href="#reviews">Read all reviews</a>
        </h3>
        <h2
        data-testid="category-test"
        className="text-lg text-gray-800 mx-4">{details['category']}</h2>
        <h1 className="text-3xl text-gray-800 font-bold my-4 mx-4"
        data-testid="name-test"
        >
          {details.name}
        </h1>
        {selected.sales_price ? (
          <div>
            {selected.sales_price}
            {salePrice(selected.original_price)}
          </div>
        ) : (
          <h2 className="text-lg text-gray-800 mx-4">
            {selected.original_price}
          </h2>
        )}
        <Styles />
      </div>
    </>
  );
}
