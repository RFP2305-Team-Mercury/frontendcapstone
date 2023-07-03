import axios from 'axios';
import apiConfig from './apiConfig';

const getReviews = async ({count, sort, product_id}) => {
  try {
    const response = await axios.get(`/reviews/?count=${count}&sort=${sort}&product_id=${product_id}`, apiConfig);
    return response.data.results;
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

const markHelpful = async (id) => {
  try {
    await axios.put(`/reviews/${id}/helpful`, null, apiConfig);
  } catch (err) {
    console.log(err);
  }
};

const reportReview = async (id) => {
  try {
    await axios.put(`/reviews/${id}/report`, null, apiConfig);
  } catch (err) {
    console.log(err);
  }
};

const postReview = async (body) => {
  try {
    await axios.post('/reviews', body, apiConfig);
  } catch (err) {
    console.log(err);
  }
}

export default { getReviews, getMetaData, markHelpful, reportReview, postReview };