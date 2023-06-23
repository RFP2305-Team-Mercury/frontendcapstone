import axios from 'axios';
import config from './apiConfig.js'

const productAPI = {

  getAll: function(page, count) {
    axios.get('/prducts', config)
    .then((data) => response.data)
    .catch((err) => console.error('getAll Error: ', err))
  },

  getOne: function(product_id) {
    axios.get('/prducts/:id', config)
    .then((data) => response.data)
    .catch((err) => console.error('getAll Error: ', err))
  },

  getStyles: function(product_id) {
    axios.get('/prducts/:id/styles', config)
    .then((data) => response.data)
    .catch((err) => console.error('getAll Error: ', err))
  },

  getRelated: function(product_id) {
      //Ahu to completed for related items
  },


};