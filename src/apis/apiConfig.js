import { BASE_URL, API_KEY} from '../../config.js'

export const config = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type' : 'application/json',
    'Authorization' : API_KEY
  }
}