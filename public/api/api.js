import axios from 'axios';

export const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept-Language': 'pt-BR',
  },
  baseURL: 'http://localhost:3000/api/posts.json',
});

const getToken = async () => {
  try {
    const value = await localStorage.getItem('get@access_token');
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    return null;
  }
};

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
