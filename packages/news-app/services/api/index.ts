import axios from "axios";

const token = "00e474437bf046848b6df6c1bddeef07";

const api = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Basic ${token}`,
  },
});

export default api;
