import axios from "axios";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

// const redirectFunc = () => {
//   console.log("Redirecting to login");
//   const response = redirect("/434g34g565uyjty");
//   return Object.defineProperty(response, "body", { value: true });
// };

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
// api.defaults.baseURL = baseUrl;

// Request interceptor
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

// Response interceptor
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
        console.log(error);
        if (error.response.status === 400) {
          console.log("Refresh token expired");
          // redirectFunc();
          // return redirect("/dashboard");
        }
        //TODO: Redirect to login
      }
    }
    return Promise.reject(error);
  }
);

export default api;
