import axios from "axios";

const api = axios.create({
  baseURL: "http://15.229.105.249:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;
