import axios from 'axios';
import config from './apiConfig.js';

export const getOne = async (product_id) => {
  try {
    const response = await axios.get(`/products/${product_id}`, config);
    return response.data;
  } catch (err) {
    console.error('getOne:', err);
  }
};

export const getStyles = async (product_id) => {
  try {
    const response = await axios.get(`/products/${product_id}/styles`, config);
    return response.data.results;
  } catch (err) {
    console.error('getStyles:', err);
  }
};