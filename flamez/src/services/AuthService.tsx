import axios from "axios";

// const redirectFunc = () => {
//   console.log("Redirecting to login");
//   const response = redirect("/434g34g565uyjty");
//   return Object.defineProperty(response, "body", { value: true });
// };

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Where to send users if login/refresh fails
const LOGIN_PATH = "/";

// Prevent multiple concurrent refresh calls
let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];

const subscribeTokenRefresh = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("FLamezUserAT");
    if (!config.headers) {
      config.headers = {} as any;
    }
    if (token) {
      (config.headers as any).Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config || {};
    const status = error?.response?.status;
    const requestUrl: string = String(originalRequest?.url || "");

    // Network/unknown error: just bubble up
    if (!status) {
      return Promise.reject(error);
    }

    // If login endpoint itself fails with 401, send user home immediately
    if (status === 401 && /(^|\/)auth\/(login|signin)(\/|$)/i.test(requestUrl)) {
      try {
        window.location.assign(LOGIN_PATH);
      } catch {
        void 0;
      }
      return Promise.reject(error);
    }

    // Unauthorized: try refresh once per request
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const performRetry = (newToken: string) => {
        if (!originalRequest.headers) {
          originalRequest.headers = {};
        }
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      };

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          subscribeTokenRefresh((token: string) => {
            performRetry(token).then(resolve).catch(reject);
          });
        });
      }

      isRefreshing = true;
      try {
        const refreshToken = localStorage.getItem("FLamezUserRT");
        if (!refreshToken) {
          throw new Error("Missing refresh token");
        }

        const baseUrl = api.defaults.baseURL || import.meta.env.VITE_BACKEND_URL || "";
        const refreshUrl = `${String(baseUrl).replace(/\/$/, "")}/auth/refreshAT`;

        const response = await axios.post(refreshUrl, { refreshToken });
        const { token } = response.data;

        // Persist and set default header for subsequent requests
        localStorage.setItem("FLamezUserAT", token);
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        onRefreshed(token);
        return performRetry(token);
      } catch (refreshError: any) {
        // If refresh fails (e.g., 400), clear tokens and optionally redirect
        localStorage.removeItem("FLamezUserAT");
        localStorage.removeItem("FLamezUserRT");

        if (refreshError?.response?.status === 400 || refreshError?.response?.status === 401) {
          try {
            window.location.assign(LOGIN_PATH);
          } catch {
            void 0; // ignore navigation errors
          }
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
