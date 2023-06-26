import React, {useEffect,useState} from "react";
import Styles from "./Styles.jsx";

import { useSelector, useDispatch } from 'react-redux';
import { getOne } from '../../apis/product.js';

export default function Details() {
  const productId = useSelector((state) => state.productId);
  const [details, setDetails] = useState({});
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOne(productId);
        setDetails(data);
        setFeatures(Object.values(data['features']));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="right-container">
        <h3>Read all reviews</h3>
        <h2 className="text-lg text-gray-800">{details.category}</h2>
        <h1 className="text-2xl text-gray-800 font-bold">{details.name}</h1>
        <h2 className="text-lg text-gray-800">{details.default_price}</h2>
        <Styles />
        <ul className="list-disc">
          {features.length > 0 && features.map((feature) => (
            <li key={feature['value']}>{feature['feature']}: {feature['value']}</li>
          )
          )}
        </ul>
      </div>
      <div className="bottom-container">
        <h2 className="text-lg text-gray-800">{details.slogan}</h2>
        <p className="text-md text-gray-800">{details.description}</p>
        <p> share on social </p>
      </div>
    </>
  );
}
