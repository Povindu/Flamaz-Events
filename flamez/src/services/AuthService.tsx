import axios from "axios";
// import { baseUrl } from "../constants/constants";
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "application/json",
  // },
});

api.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
// api.defaults.baseURL = baseUrl;

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("FLamezUserAT");
    console.log(token);
    if (!token) {
      //TODO: Redirect to login
      return config;
    }

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await localStorage.getItem("FLamezUserRT");

        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}auth/refreshAT`,
          {
            refreshToken,
          }
        );
        const { token } = response.data;

        await localStorage.setItem("access-token", token);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (error) {
        //TODO: Redirect to login
        // Handle refresh token error or redirect to login
      }
    }
    return Promise.reject(error);
  }
);

export default api;
