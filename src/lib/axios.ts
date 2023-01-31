import Axios from 'axios';

export const GITHUBAPI_BASE_URL = 'https://api.github.com/';

export const axios = Axios.create({
  baseURL: GITHUBAPI_BASE_URL,
  headers: { Authorization: process.env.REACT_APP_TOKEN },
});

axios.interceptors.response.use(
  (response) => response.data,
  (errors) => {
    const message = errors.message || errors.response?.data?.message;
    return message;
  }
);
