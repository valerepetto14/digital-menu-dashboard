import axios from "axios";

const api = axios.create({
  baseURL: "http://15.229.105.249:3000",
});

export default api;
