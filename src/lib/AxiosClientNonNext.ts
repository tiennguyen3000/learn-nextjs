// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
//config` for the full list of configs

const axiosClientServer = axios.create({
  baseURL: "http://35.76.96.230:8080",
  headers: {
    "content-type": "application/json",
    "Accept": "*/*",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClientServer.interceptors.request.use(async (config) => {
  delete config.headers.Authorization;
  // Handle token here ...
  return config;
});
axiosClientServer.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    
    // Handle errors
    throw {error};
  },
);
export default axiosClientServer;
