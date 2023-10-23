import axios from "axios";

const SERVER_ADDRESS = import.meta.env.VITE_BASE_URL;
const S3_ADDRESS = import.meta.env.VITE_S3_URL;

export const serverAxios = axios.create({
  baseURL: `${SERVER_ADDRESS}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// 아래는 return 방식 따라서 바꿔야함.
serverAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  async (error) => {
    const originRequest = error.config;

    if (error.response.status === 403 && !originRequest._retry) {
      originRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const headers = {
          "Content-Type": "application/json",
          Authorization_refresh: `Bearer ${refreshToken}`,
        };
        const response = await axios.get(`${SERVER_ADDRESS}/profile`, {
          headers,
        });
        localStorage.setItem("accessToken", response.headers["authorization"]);
        localStorage.setItem(
          "refreshToken",
          response.headers["authorization_refresh"]
        );

        originRequest.headers.Authorization = `Bearer ${response.headers["authorization"]}`;
        return serverAxios(originRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const s3Axios = axios.create({
  baseURL: `${S3_ADDRESS}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

s3Axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
