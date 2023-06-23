import React from "react";
import {useSelector} from 'react-redux'

export default function Styles() {
  const styles = ['test1', 'test2'];
  let productId = useSelector(state=>state.productId)
  return (
    <div>
      <h2> Style - Selected Style</h2>
      <h1>Product#:{productId}</h1>
      {styles.map((style) => {
        console.log(style);
        //add conditional rendering to overlay with checkmark  & title above thumbnails
        //default to first style in list
        //max 4 per row
        //no limit to number of styles, only 1 style selected at a time
      })}
    </div>
  );
}
