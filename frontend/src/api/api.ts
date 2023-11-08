import axios from "axios";

const SERVER_ADDRESS = import.meta.env.VITE_BASE_URL;
export const S3_ADDRESS = import.meta.env.VITE_S3_URL;

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
    console.log(error.response.status);
    const originRequest = error.config;

    if (error.response.status === 401 && !originRequest._retry) {
      originRequest._retry = true;
      const accessToken = localStorage.getItem("accessToken");
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        };
        const response = await axios.get(
          `${SERVER_ADDRESS}/auth/user/reissue`,
          {
            headers,
          }
        );
        console.log(response);
        localStorage.setItem("accessToken", response.data);

        originRequest.headers.Authorization = `Bearer ${response.data}`;
        return serverAxios(originRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const formAxios = axios.create({
  baseURL: `${SERVER_ADDRESS}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

formAxios.interceptors.request.use(
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
