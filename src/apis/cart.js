import axios from 'axios';
import config from './apiConfig.js';


  export const getCart = async () => {
    try{
      const response = await axios.get('/cart', config);
      return response.data;
    } catch (err){
      console.error('getCart: ', err)
    }
  }

  export const addCart = async (sku_id, quantity) => {
    try{
      const response = await axios.post('/cart',{sku_id: sku_id, quantity: quantity}, config);
      console.log('items added to cart');
    } catch (err){
      console.error('addCart: ', err)
    }
  }



