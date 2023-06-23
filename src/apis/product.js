import axios from 'axios';
import config from './apiConfig.js'

  //need to figure out params
  export const getAll = async (page,count) => {
    try{
      const response = await axios.get('/products', config);
      return response.data;
    } catch (err){
      console.error('getCart: ' err)
    }
  };

  export const getOne = async (product_id) => {
    try{
      const response = axios.get('/products/:id', config);
      return response.data;
    } catch (err){
      console.error('getCart: ' err)
    }
  }

  export const getStyles = async (product_id) => {
    try{
      const response = axios.get('/products/:id/styles', config)
      return response.data;
    } catch (err){
      console.error('getCart: ' err)
    }
  }

  export const getRelated = async (product_id) => {
    try{

    } catch (){

    }
  }

