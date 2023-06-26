import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getStyles } from '../../apis/product.js';
import Cart from "./Cart.jsx";

export default function Styles() {
  const productId = useSelector((state) => state.productId);
  const styles = useSelector((state) => state.styles);
  const dispatch = useDispatch();
  const [selected, setSelect] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStyles(productId);
        dispatch({ type: 'SET_STYLES', payload: data });
        setSelect(data[0]); // default to first style in the list
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSelect = (id) => {
    for(var i =0; i < styles.length; i++){
      if(styles[i]['style_id'] === id){
        setSelect(styles[i]);
      }
    }
  };

  const imageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "5px"
  };

  const containerStyle = { // max 4 per row
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch"
  };

  const selectedStyle = {
    border: "5px solid black",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "5px"
  };

  return (
  <>
    <h2 className="text-lg text-gray-800">Style - {selected.name}</h2>
    <div style={containerStyle}>
      {styles.map((style) => {
        if(style === selected){ // add conditional rendering to overlay with checkmark & title above thumbnails
          return(<img src={style.photos[0].thumbnail_url}
            alt={style.name}
            style={selectedStyle}
            key={style.style_id}
            onClick={() => handleSelect(style.style_id)}/>)
        } else {
          return (<img src={style.photos[0].thumbnail_url}
            alt={style.name}
            style={imageStyle}
            key={style.style_id}
            onClick={() => handleSelect(style.style_id)}/>)
        }
      })}
    </div>
    <Cart selected={selected}/>
    </>
  );
}
