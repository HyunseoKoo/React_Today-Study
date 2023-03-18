import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // .env.local 파일로 숨기기 안됨.
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
  },
});
