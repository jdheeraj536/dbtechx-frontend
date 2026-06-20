import axios from 'axios';

// Backend Target Port 5005 fixed dynamically
const currentHost = window.location.hostname || 'localhost';
const API = axios.create({ 
  baseURL: `http://${currentHost}:5005/api` 
});

// Request interceptor for secure routes
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('adminToken');
  const userStr = localStorage.getItem('user');
  
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  } else if (userStr) {
    try {
      const user = JSON.parse(userStr);
      if (user?.token) {
        req.headers.Authorization = `Bearer ${user.token}`;
      }
    } catch (e) {
      console.error("Token structural parsing failed", e);
    }
  }
  return req;
});

export default API;