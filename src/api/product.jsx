import api from "./config";

export const getProducts = () => {
  return api.get("/products");
};
