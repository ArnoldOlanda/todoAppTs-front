import axios from 'axios';

export const todoApiURL = 'http://192.168.1.49:4000/api';

export const todoAPI = axios.create({
  baseURL: todoApiURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
