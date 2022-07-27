import axios from 'axios';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const API_KEY = '7a4cd4317772102a9b88ef6a54b71590';
export const service = page => {
  return axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${page}`);
};
