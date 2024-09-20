import Dev from './dev'
import Prod from './prod'
import axios from 'axios';

const RootService:any = (env='development')=>env==='development'?Dev:Prod

// Define the base URL based on the environment
const {BASEURL=''} = RootService(process.env.NODE_ENV?.trim());

// Function to add authorization header to requests
const addAuthorizationHeader = async (config:any) => {
  const token = await localStorage.getItem('token');
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
      // 'Access-Control-Allow-Origin': '*',
    };
  }
  return config;
}

// Function to handle request errors
const handleRequestError = (error:any) => {
  return Promise.reject(error);
}

// Function to handle response errors
const handleResponseError = (error:any) => {
  return Promise.reject(error);
}

// Create an Axios instance with base URL and interceptors
const axiosInstance = axios.create({
  baseURL: BASEURL,
});

// Add request interceptor
axiosInstance.interceptors.request.use(addAuthorizationHeader, handleRequestError);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  handleResponseError
);

// Functions for making different types of requests
export const getReq = async (url:string) => {
  return await axiosInstance.get(url);
}

export const postReq = async (url:string, data:any, type?:string) => {
  if (type === 'form') {
    return await axiosInstance.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } });
  } else {
    return await axiosInstance.post(url, data);
  }
}

export const putReq = async (url:string, data:any, type?:string) => {
  if (type === 'form') {
    // Example of using fetch for multipart form data
    return await axiosInstance.put(url, data, { headers: { 'Content-Type': 'multipart/form-data' } });
  } else {
    return await axiosInstance.put(url, data);
  }
}

export const patchReq = async (url:string, data:any, type?:string) => {
  if (type === 'form') {
    return await axiosInstance.patch(url, data, { headers: { 'Content-Type': 'multipart/form-data' } });
  } else {
    return await axiosInstance.patch(url, data);
  }
}

export const deleteReq = async (url:string) => {
  return await axiosInstance.delete(url);
}
