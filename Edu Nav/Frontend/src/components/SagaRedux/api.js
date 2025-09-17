import axios from "axios";
const backend_url = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:5000/api/v1'; 
import { getToken } from '../../util/tokenService'

const API = axios.create({
  baseURL: backend_url,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  error => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
    return Promise.reject({
      message: errorMessage,
      status: error.response?.status
    });
  }
);

export const signUp = (userData) => API.post("/users/signup", userData);
export const signIn = (credentials) => API.post('/users/login', credentials);
export const getAptitudeQuiz = () => API.get('/quiz/aptitude-test');
export const submitAptitudeQuiz = (answers) => API.post('/quiz/submit-answers', answers);
export const getCollegeDirectory = () => API.get('/colleges/all');
export const getRecommendations = (userId) => API.get(`/users/${userId}/recommendations`);