import axios from 'axios'
import apiConfig from './apiConfig'

const getQA = async(id) => {
  try{
    const response = await axios.get(`/qa/questions/?product_id=40347`,apiConfig)
    // console.log(response.data.results)
    return response.data.results
  }
  catch(error){
    console.log('Error getting QA :',error)
  }
}

export default getQA;