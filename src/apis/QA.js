import axios from 'axios'
import apiConfig from './apiConfig'

const getQA = async(id) => {
  try{
    const response = await axios.get(`/qa/questions/?product_id=${id}`,apiConfig)
    console.log(response)
    return response.data.results
  }
  catch(error){
    console.log('Error getting QA :',error)
  }
}

export default getQA;