import React, {useState, useEffect} from "react";
import {useSelector} from 'react-redux'
import { getStyles }  from '../../apis/product.js';

export default function Styles() {
const [styles, setStyle] = useState(['test1,test2'])

useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
    try {
      // get the data from the API
      const data = await getStyles(40344);
      // convert the data to JSON
      setStyle(data);
    } catch (error) {
      console.error(error);
    }
  };
  // call the function
  fetchData();
}, []);


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
