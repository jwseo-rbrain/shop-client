import axios from "axios";

const instance = axios.create({
  baseURL: `https://portal.rbrain.co.kr/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers["X-Authorization"] = localStorage.getItem("token");
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.info(err);
    if (err.response.status === 401) window.location.href = "/auth/login";
    return Promise.reject(err);
  }
);

export default instance;
