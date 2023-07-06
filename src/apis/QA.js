import axios from 'axios'
import apiConfig from './apiConfig'

const getQA = async(id) => {
  try{
    const response = await axios.get(`/qa/questions/?product_id=${id}&count=100`,apiConfig)
    console.log('get',response)
    return response.data.results
  }
  catch(error){
    console.log('Error getting QA :',error)
  }
}
const postQ = async(id,body,name,email) => {
  try{
    const response = await axios.post(`/qa/questions`,
    {
      body: body,
      name: name,
      email: email,
      product_id: id
  }
    ,apiConfig)
    console.log('Response:',response)
  }

  catch(error){
    console.log('Error posting Q :',error)
  }
}
const postA = async (body, name, email, photos,id) => {

  try {
    const response = await axios.post(`/qa/questions/${id}/answers`,
      {
        body: body,
        name: name,
        email: email,
        photos: [photos]
      },
      apiConfig
    );
    console.log('Response:', response);
  } catch (error) {
    console.log('Error posting A:', error);

  }

};

const putQ = async(id,data) => {

  try{
    const response = await axios.put(`/qa/questions/${id}/helpful`,data,apiConfig)

  }
  catch(error){
    console.log('Error updating helpfulQ :',error)
  }
}
const putA = async(id,data) => {

  try{
    const response = await axios.put(`/qa/answers/${id}/helpful`,data,apiConfig)

  }
  catch(error){
    console.log('Error updating helpfulA :',error)
  }
}
const reportA = async(id,data) => {

  try{
    const response = await axios.put(`/qa/answers/${id}/report`,data,apiConfig)
    // console.log('working?',response.config.data)

  }
  catch(error){
    console.log('Error updating reportA :',error)
  }
}


export default {getQA ,postQ, postA, putQ, putA, reportA};

