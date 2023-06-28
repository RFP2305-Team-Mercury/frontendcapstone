import axios from 'axios';
import apiConfig from './apiConfig';

const getReviews = async (params) => {
  try {
    const response = await axios.get(`/reviews/?product_id=${params.product_id}`, apiConfig);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getMetaData = async (params) => {
  try {
    const response = await axios.get(`/reviews/meta/?product_id=${params.product_id}`, apiConfig)
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default { getReviews, getMetaData };