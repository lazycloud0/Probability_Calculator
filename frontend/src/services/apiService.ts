import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const calculateCombined = async (a: number, b: number) => {
  const response = await axios.post(`${API_BASE_URL}/combined`, { a, b });
  return response.data;
};

export const calculateEither = async (a: number, b: number) => {
  const response = await axios.post(`${API_BASE_URL}/either`, { a, b });
  return response.data;
};