import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8083/api",
  withCredentials: true
});

// Add headers automatically
api.interceptors.request.use((config) => {

  config.headers["Content-Type"] = "application/json";
  return config;
});

export default api;
