import secretConfig from '../../config.js';

const { BASE_URL, API_KEY } = secretConfig;

const config = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type' : 'application/json',
    'Authorization' : API_KEY
  }
};

export default config;