import axios from 'axios';

import headerInterceptors from './interceptors/header.interceptor';
import unauthorizedInterceptors from './interceptors/unauthorized.interceptor';

const api = axios.create({});

api.interceptors.request.use(headerInterceptors);

api.interceptors.response.use(
  response => response,
  async (error) => {
    const err = await unauthorizedInterceptors(error);
    console.log(err)
    return Promise.reject(err);
  },
);

export default api;
