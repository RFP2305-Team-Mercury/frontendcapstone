import axios from 'axios';
import config from './config.js'

export const getAll = async (page,count) => {
  try{
    const response = await axios.get('/products', config);
    return response.data;
  } catch (err){
    console.error('getCart: ' err)
  }
};