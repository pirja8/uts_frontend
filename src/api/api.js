import axios from 'axios';

const API_URL = 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': '12345',
  },
});

export const getMinumanSehat = () => axiosInstance.get('/minuman-sehat');
export const addMinumanSehat = (nama, harga) => axiosInstance.post('/minuman-sehat', { nama, harga });
export const deleteMinumanSehat = (id) => axiosInstance.delete(`/minuman-sehat/${id}`);
