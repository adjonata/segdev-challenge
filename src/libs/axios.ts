import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

axios.interceptors.response.use((response) => {
  return response?.data ? response.data : response;
});

export default api;
