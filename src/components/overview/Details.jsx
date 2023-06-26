import React, {useEffect,useState} from "react";
import Styles from "./Styles.jsx";
import Cart from "./Cart.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { getOne } from '../../apis/product.js';

export default function Details() {
  const productId = useSelector((state) => state.productId);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // get the data from the API
        const data = await getOne(productId); // Use productId instead of product
        // convert the data to JSON
        setDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    // call the function
    fetchData();
  }, []);

  return (
    <>
      <div className="right-container">
        <h3>Read all reviews</h3>
        {/* <h2>{details.category}</h2>
        <h1>{details.name}</h1>
        <h2>{details.default_price}</h2> */}
        <Styles />
        <Cart />
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
      <div className="bottom-container">
        <h2>{details.slogan}</h2>
        <p>{details.description}</p>
        <p> share on social </p>
      </div>
    </>
  );
}
