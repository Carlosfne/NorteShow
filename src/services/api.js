import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.1.73:3001/api',
  baseURL: 'https://back-norteshow.herokuapp.com/api',
})

export default api;