import axios from 'axios';

const per_page = 10;
const page = 20;

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: process.env.AUTH_TOKEN,
  },
  params: {
    per_page,
    page,
  },
});
