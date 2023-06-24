import axios from 'axios';
import config from './config.js'


  export const getCart = async () => {
    try{
      const response = await axios.get('/cart', config);
      return response.data;
    } catch (err){
      console.error('getCart: ', err)
    }
  }

  export const addCart = async (sku_id) => {
    try{
      const response = await axios.post('/cart',{sku_id: sku_id}, config);
    } catch (err){
      console.error('addCart: ', err)
    }
  }



