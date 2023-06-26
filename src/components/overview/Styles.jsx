import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getStyles } from '../../apis/product.js';

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
        setSelect(data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    // call the function
    fetchData();
  }, []);

  useEffect(() => {
    // This callback will be triggered whenever the `styles` state changes
    console.log('Styles updated:', styles);
  }, [styles]); // Add `styles` as a dependency to monitor its changes

  const imageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "5px"
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch"
  };

  return (
  <>
    <h2>Style - {selected.name}</h2>
    <div style={containerStyle}>
      {styles.map((style) => {
        return (<img src={style.photos[0].thumbnail_url}
        alt={style.name}
        style={imageStyle}
        key={style.style_id}/>)
        // add conditional rendering to overlay with checkmark & title above thumbnails
        // default to first style in the list
        // max 4 per row
        // no limit to the number of styles, only 1 style selected at a time
      })}
    </div>
    </>
  );
}
