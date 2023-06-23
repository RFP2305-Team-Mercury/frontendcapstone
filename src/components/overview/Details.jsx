import React from "react";
import Styles from "./Styles.jsx";
import Cart from "./Cart.jsx";

export default function Details() {
  return (
    <>
      <div className="right-container">
        <h3>Read all reviews</h3>
        <h2>Category</h2>
        <h1>Title</h1>
        <h2>Price</h2>
        <p> this is the details page </p>
        <Styles />
        <Cart />
        <ul>
          <li>description 1</li>
          <li>description 2</li>
          <li>description 3</li>
        </ul>
      </div>
      <div className="bottom-container">
        <h2>Product Slogan</h2>
        <p>text description</p>
        <p> share on social </p>
      </div>
    </>
  );
}
