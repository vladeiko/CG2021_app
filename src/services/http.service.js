import axios from "axios";

import storage from "./storage.service";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:6000";
console.log(baseURL);
const http = axios.create({ baseURL });

const AUTH_STORAGE_KEY = "auth";

export const getAuthHeader = () => {
  const auth = storage.getItem(AUTH_STORAGE_KEY);
  const accessToken = auth ? auth.access_token : null;
  return { Authorization: `Bearer ${accessToken}` };
};

const get = (url, headers = {}, params = {}) => {
  const authHeader = getAuthHeader();
  return http.get(url, {
    ...params,
    headers: {
      ...authHeader,
      ...headers,
    },
  });
};

const post = (url, data, headers = {}, params = {}) => {
  const authHeader = getAuthHeader();
  return http.post(url, data, {
    ...params,
    headers: {
      ...authHeader,
      ...headers,
    },
  });
};

export default {
  http,
  get,
  post,
};
