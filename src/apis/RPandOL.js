import axios from 'axios';
import config from './apiConfig.js';


const getCardInfo = async (id) => {
  try {
    const productInfoPromise = axios.get(`/products/${id}`, config);
    const prodThumbnailPromise = axios.get(`/products/${id}/styles`, config);

    let productInfo = await productInfoPromise;
    let prodThumbnail = await prodThumbnailPromise;

    return {thumbnail: prodThumbnail.data.results[0].photos[0].thumbnail_url,
            name: productInfo.data.name,
            slogan: productInfo.data.slogan,
            category: productInfo.data.category,
            price: productInfo.data.default_price,
            stars: 0//TODO UPDATE THIS
          };

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