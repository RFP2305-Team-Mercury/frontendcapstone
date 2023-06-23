require("dotenv").config();

export const config = {
  baseURL: `${process.env.BASE_URL}`;
  headers: {
    'Content-Type' : 'application/json',
    'Authorization' : `${process.env.API_KEY}`
  }
}