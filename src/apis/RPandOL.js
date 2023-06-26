import axios from 'axios';
import config from './apiConfig.js';


const getCardInfo = async (id) => {
  try {
    const productInfoPromise = axios.get(`/products/:${id}`, config);
    const prodThumbnailPromise = axios.get(`/products/:${id}/styles`, config);

    let productInfo = await productInfoPromise.data;
    let prodThumbnail = await prodThumbnailPromise.data;

    console.log(productInfo, prodThumbnail)
    return { productInfo, prodThumbnail };

  } catch (err) {
    console.error(err)
  }
};
const getList = async (id) => {
  try {
    const relatedListPromise = axios.get(`products/${id}/related`, config);
    let relatedList = await relatedListPromise;
    return relatedList.data;
  } catch (err) {
    console.error(err)
  }
};
export default { getList, getCardInfo }