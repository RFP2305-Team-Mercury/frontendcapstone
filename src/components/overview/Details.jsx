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
    <div>
      <div className='col-span-1 row-span-1'>
        <h3 className='font-light text-gray-600 py-2 underline mx-4'>Read all reviews</h3>
        <h2 className="text-lg text-gray-800 mx-4">{details.category}</h2>
        <h1 className="text-3xl text-gray-800 font-bold my-4 mx-4">{details.name}</h1>
        <h2 className="text-lg text-gray-800 mx-4">{details.default_price}</h2>
        <Styles />
        </div>
      <div className='col-span-2 row-span-1'>
        <h2 className="text-lg text-gray-800">{details.slogan}</h2>
        <p className="text-md text-gray-800">{details.description}</p>
        <p> share on social </p>
      </div>
      <div className='col-span-1 row-span-1'>
        <ul className="list-disc">
          {features.length > 0 && features.map((feature) => (
            <li key={feature['value']}>{feature['feature']}: {feature['value']}</li>
          )
          )}
        </ul>
      </div>
    </div>
  );
}
