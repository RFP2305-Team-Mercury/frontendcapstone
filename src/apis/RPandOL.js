import axios from 'axios';
import config from './apiConfig.js';

export const getCardInfo = async (id) => {
  try{
    const productInfoPromise =  axios.get(`/products/:${id}`, config);
    const prodThumbnailPromise = axios.get(`/products/:${id}/styles`, config);

    let productInfo = await productInfoPromise.data;
    let prodThumbnail = await prodThumbnailPromise.data;

    return ;
  } catch (err){
    console.error(err)
  }
};